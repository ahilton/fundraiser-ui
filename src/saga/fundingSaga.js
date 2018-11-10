import {call, race, put, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {resetDisplayMode} from '../action'
import {
    configUpdate,
    displayMode,
    infoModeIndex,
    modeUpdate,
    nextDisplayMode,
    resetNextDisplayMode,
    tickerModeIndex
} from "../action/index";
import {getDisplayMode, getModeIndex, getModes} from "../redux/funding";
// import {getLastEvent, getLastTimestamp, getTickData} from "../redux/funding";
const axios = require('axios')

function* pollConfig() {
    try {
        var response = yield call(
            axios.get,
            'http://localhost:8080/api/config/'
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
            'http://localhost:8080/api/config/mode'
        )
        yield put(modeUpdate(response.data))
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
        yield call(delay, 4000)
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
            console.log("nextSlideMode = " + nextSlideMode)

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

function* handleMode(modeName) {
    // process data for next slide

    console.log("showing next slide:"+modeName)
    yield put(displayMode(modeName))
    yield call(delay, 3000)
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
        mode: "totalOnNight"
    },
    {
        name: "TICKER_2",
        mode: "targetTicker"
    }
]
const infoModes = [
    {
        name: "MESSAGE",
        mode: "message"
    },
    {
        name: "INSTA",
        mode: "insta"
    },
    {
        name: "AVA",
        mode: "avaInfo"
    }
]

function* selectNextSlide() {
    var modes = yield select(getModes)
    console.log(modes)

    if (modes.auction) {
        return 'AUCTION_MODE'
    }
    var modeIndex = yield select(getModeIndex)
    var displayMode = yield select(getDisplayMode)

    //filter mode consts
    let activeTickerModes = tickerModes.filter(x => modes[x.mode] === true);
    let activeInfoModes = infoModes.filter(x => modes[x.mode] === true);

    console.log("active ticker modes")
    console.log(activeTickerModes)
    console.log("active info modes")
    console.log(activeInfoModes)

    if (activeTickerModes.length === 0 && activeInfoModes.length === 0) {
        return tickerModes[0].name
    }
    if (activeInfoModes.length > 0 && (displayMode && displayMode.startsWith("TICKER") || activeTickerModes.length  === 0)) {
        var index = modeIndex.info + 1
        if (index >= activeInfoModes.length) {
            index = 0
        }
        yield put(infoModeIndex(index))
        return activeInfoModes[index].name
    } else {
        var index = modeIndex.ticker + 1
        if (index >= activeTickerModes.length) {
            index = 0
        }
        yield put(tickerModeIndex(index))
        return activeTickerModes[index].name
    }

    //if action; auction
    //else; [ticker-1 / ticker-2] <-> [instagram, message]
}


// function* screensaverInit() {
//     //begin polling
//     while (true) {
//         yield call(waitForNextScreenSaver)
//         yield put(nextDisplayMode('takings'))
//         yield call(waitForNextScreenSaver)
//         yield put(nextDisplayMode('lastDonation'))
//     }
// }
//
// function* eventTimerInit() {
//     //begin polling
//     // yield call(delay, 3000)
//
//     while (true) {
//         try {
//             // yield call(processEvents)
//
//             yield put(resetDisplayMode())
//
//             yield call(delay, 3000)
//             var nextDisplayMode = yield select((store) => store.funding.nextDisplayMode)
//             if (nextDisplayMode) {
//                 // if (nextDisplayMode === 'lastDonation'){
//                 //     var donations = yield select((store) => store.funding.lastDonations)
//                 //     if (donations && donations.length > 0){
//                 //         var randIndex = Math.floor(Math.random() * donations.length)
//                 //         yield put(showDonation(donations[randIndex], false))
//                 //     }
//                 // }
//                 // else {
//                 yield put(displayMode(nextDisplayMode))
//                 // }
//                 yield call(waitOnPage)
//                 yield put(resetNextDisplayMode())
//             }
//
//             yield put(resetDisplayMode())
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }
//
// function* waitForNextScreenSaver() {
//     yield call(delay, 6000)
// }
//
// function* waitOnPage() {
//     yield call(delay, 12000)
//     yield put(displayMode('thanks'))
//     yield call(delay, 5000)
// }

// function* processEvents() {
//
//     // check for new donations
//     var state = yield select((store) => store.funding)
//     // console.log(state)
//     // loop over last donations - starting at the end
//     for (var i = state.lastDonations.length - 1; i > -1; i--) {
//         var lastD = state.lastDonations[i]
//         // console.log(lastD)
//         if (!state.processedDonations[lastD.donationId]) {
//             yield put(displayMode('fireworks'))
//             yield call(delay, 8000)
//             yield put(showDonation(lastD, true))
//             // yield call(delay, 4000)
//             yield call(waitOnPage)
//
//             // yield put(lastDonationProcessedId(lastD.donationId))
//             return;
//         }
//     }
//
// }

function* fundingSagaRoot() {
    yield takeLatest('persist/REHYDRATE', pollDataInit)
    // yield takeLatest('persist/REHYDRATE', eventTimerInit)
    yield takeLatest('persist/REHYDRATE', displayController)
    // yield takeLatest('persist/REHYDRATE', screensaverInit)
}

export default fundingSagaRoot