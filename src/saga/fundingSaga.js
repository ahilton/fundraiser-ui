import {call, put, race, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {
    configUpdate,
    displayMode, donationsUpdate, eventsUpdate, fireworks,
    infoModeIndex,
    instaUpdate, lastEventProcessed,
    modeUpdate,
    tickerModeIndex,
    tickerUpdate
} from "../action/index";
import {getDisplayMode, getEvents, getLastEventProcessed, getModeIndex, getModes} from "../redux/funding";
import {loadDonationsData, loadInstaDisplayData, loadTickerData, noop} from "./displaySaga";
// import {getLastEvent, getLastTimestamp, getTickData} from "../redux/funding";
const axios = require('axios')

const hostname = 'http://localhost:8080'

function* pollConfig() {
    try {
        var response = yield call(
            axios.get,
            hostname + '/api/config/'
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
            hostname + '/api/config/mode'
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
            hostname + '/api/insta/approved'
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
            hostname + '/api/fundraise/ticker'
        )
        yield put(tickerUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}

function* pollDonations() {
    try {
        var response = yield call(
            axios.get,
            hostname + '/api/fundraise/donations'
        )
        yield put(donationsUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}
function* pollEvents() {
    try {
        var response = yield call(
            axios.get,
            hostname + '/api/events'
        )
        yield put(eventsUpdate(response.data))
    }
    catch (error) {
        console.log(error)
    }
}
function* clearEvents() {
    try {
        yield call(
            axios.get,
            hostname + '/api/events/clear'
        )
    }
    catch (error) {
        console.log(error)
    }
}

function* pollDataInit() {
    //begin polling
    yield call(clearEvents)
    while (true) {
        yield call(pollConfig)
        yield call(pollModes)
        yield call(pollInsta)
        yield call(pollTicker)
        yield call(pollDonations)
        yield call(pollEvents)
        yield call(delay, 2000)
    }
}

function* processEvents() {
    try {
        console.log('PROCESSING EVENTS')
        var events = yield select(getEvents)
        // check for and handle unprocessed events
        var lastEProcessed = yield select(getLastEventProcessed)

        if (!events) {
            return
        }

        const newEvents = events.filter(y => !lastEProcessed || y.id > lastEProcessed)
        var newLastEventProcessed = lastEProcessed
        for (var i=0; i<newEvents.length; i++) {
            const event = newEvents[i]
            newLastEventProcessed = event.id

            switch(event.event) {
                case 'FIREWORKS':
                    yield put(fireworks(''))
                    yield call(delay, 5000)
                    break;
                case 'AUCTION_NEXT':
                    break;
                default:
                    break;
            }
        }
        yield put(lastEventProcessed(newLastEventProcessed))
    }
    catch (error) {
        console.log(error)
    }
}

/*
    CYCLE THROUGH SLIDES
 */

function* displayController() {
    while (true) {
        try {
            yield call(processEvents)

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
    yield call(delay, 10000)
}

function* interruptIfModeChanges() {
    var currentModes = yield select(getModes)
    var currentEvents = yield select(getEvents)
    while (true) {
        yield call(delay, 500)
        var newEvents = yield select(getEvents)
        if (newEvents.length > currentEvents.length){
            return
        }
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
        name: "DONATION",
        mode: "lastDonation",
        loadDisplay: () => loadDonationsData()
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