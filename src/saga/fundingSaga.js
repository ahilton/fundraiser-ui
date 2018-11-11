import {call, put, race, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {
    configUpdate,
    displayMode,
    infoModeIndex,
    instaUpdate,
    modeUpdate,
    tickerModeIndex,
    tickerUpdate
} from "../action/index";
import {getDisplayMode, getModeIndex, getModes} from "../redux/funding";
import {loadInstaDisplayData, loadTickerData, noop} from "./displaySaga";
// import {getLastEvent, getLastTimestamp, getTickData} from "../redux/funding";
const axios = require('axios')

const hostname = 'localhost'

function* pollConfig() {
    try {
        var response = yield call(
            axios.get,
            'http://' + hostname + ':8080/api/config/'
        )
        yield put(configUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

function* pollModes() {
    try {
        var response = yield call(
            axios.get,
            'http://' + hostname + ':8080/api/config/mode'
        )
        yield put(modeUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

function* pollInsta() {
    try {
        var response = yield call(
            axios.get,
            'http://' + hostname + ':8080/api/insta/approved'
        )
        yield put(instaUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

function* pollTicker() {
    try {
        var response = yield call(
            axios.get,
            'http://' + hostname + ':8080/api/fundraise/ticker'
        )
        yield put(tickerUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

function* pollDataInit() {
    //begin polling
    while (true) {
        yield call(pollConfig)
        yield call(pollModes)
        yield call(pollInsta)
        yield call(pollTicker)
        yield call(delay, 5000)
    }
}


/*
    CYCLE THROUGH SLIDES
 */

function* displayController() {
    while (true) {
        try {
            // pick slide
            var nextSlideMode = yield call(selectNextSlide)
            //console.log("nextSlideMode = " + nextSlideMode)

            // race handle & watch for mode change
            yield race({
                handleMode: call(handleMode, nextSlideMode),
                interrupt: call(interruptIfModeChanges)
            })

        }
        catch (error) {
            console.log(error)
        }
        // sleep to avoid loss of control
        yield call(delay, 500)
    }
}

function* handleMode(mode) {
    // process data for next slide
    yield call(mode.loadDisplay)

    //console.log("showing next slide:"+modeName)
    yield put(displayMode(mode.name))
    yield call(delay, 4000)
}

function* interruptIfModeChanges() {
    var currentModes = yield select(getModes)
    while (true) {
        yield call(delay, 500)
        yield select(getModes)
        var newModes = yield select(getModes)
        // if newModes !== currentModes
        for (var key in currentModes) {
            if (currentModes[key] !== newModes[key]) {
                return
            }
        }
    }
}

/*
- 1 ticker
- 2

{auction: false, targetTicker: true, totalOnNight: true, lastDonation: false, message: false, …}
auction: false
avaInfo: true
insta: true
lastDonation: false
message: false
targetTicker: true
totalOnNight: true
__proto__: Object
 */

const tickerModes = [
    {
        name: "TICKER_1",
        mode: "totalOnNight",
        loadDisplay: () => loadTickerData()
    },
    {
        name: "TICKER_2",
        mode: "targetTicker",
        loadDisplay: () => loadTickerData()
    }
]
const infoModes = [
    {
        name: "MESSAGE",
        mode: "message",
        loadDisplay: () => noop()
    },
    {
        name: "INSTA",
        mode: "insta",
        loadDisplay: () => loadInstaDisplayData()
    },
    {
        name: "AVA",
        mode: "avaInfo",
        loadDisplay: () => noop()
    },
    {
        name: "FIREWORKS",
        mode: "fireworks",
        loadDisplay: () => noop()
    }
]


function* selectNextSlide() {
    var modes = yield select(getModes)
    // console.log(modes)

    if (modes.auction) {
        return 'AUCTION_MODE'
    }
    var modeIndex = yield select(getModeIndex)
    var displayMode = yield select(getDisplayMode)

    //filter mode consts
    let activeTickerModes = tickerModes.filter(x => modes[x.mode] === true);
    let activeInfoModes = infoModes.filter(x => modes[x.mode] === true);

    // console.log("active ticker modes")
    // console.log(activeTickerModes)
    // console.log("active info modes")
    // console.log(activeInfoModes)

    if (activeTickerModes.length === 0 && activeInfoModes.length === 0) {
        return tickerModes[0]
    }
    if (activeInfoModes.length > 0 && (displayMode && displayMode.startsWith("TICKER") || activeTickerModes.length === 0)) {
        var index = modeIndex.info + 1
        if (index >= activeInfoModes.length) {
            index = 0
        }
        yield put(infoModeIndex(index))
        return activeInfoModes[index]
    } else {
        var index = modeIndex.ticker + 1
        if (index >= activeTickerModes.length) {
            index = 0
        }
        yield put(tickerModeIndex(index))
        return activeTickerModes[index]
    }

    //if action; auction
    //else; [ticker-1 / ticker-2] <-> [instagram, message]
}


function* fundingSagaRoot() {
    yield takeLatest('persist/REHYDRATE', pollDataInit)
    yield takeLatest('persist/REHYDRATE', displayController)
}

export default fundingSagaRoot