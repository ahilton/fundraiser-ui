import {call, put, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {donationCurrentTotal, resetDisplayMode, lastDonations, showDonation} from '../action'
import {displayMode, fundraiserTarget, fundraiserTotal, nextDisplayMode, resetNextDisplayMode} from "../action/index";
// import {getLastEvent, getLastTimestamp, getTickData} from "../redux/funding";
const axios = require('axios')

function* pollFundingPage() {

    //var lastTimestamp = yield select((store) => getLastTimestamp(store))
    var response
    try {
        response = yield call(
            axios.get,
            'http://localhost:8080/api/state'
            // 'https://4ava.azurewebsites.net/api/state'
        )
        // console.log(response)
        const responseData = response.data

        // console.log(responseData.currentDonationTotal)
        yield put(donationCurrentTotal(responseData.currentDonationTotal))
        yield put(lastDonations(responseData.donations))
        yield put(fundraiserTarget(responseData.fundraisingTarget))
        yield put(fundraiserTotal(responseData.takings))
        // yield call(delay, 4000)
        // yield put(stickySelect({
        //     lastOrderHighlight:{
        //         stock:lastStock,
        //         timeStamp:lastOrderResponse.data.lastOrderState.timestamp
        //     }
        // }))

    }
    catch (error) {
        console.log(error)
        return
    }

}

function* pollFundingInit() {
    //begin polling
    while (true) {
        yield call(pollFundingPage)
        yield call(delay, 4000)
    }
}

function* screensaverInit() {
    //begin polling
    while (true) {
        yield call(waitForNextScreenSaver)
        yield put(nextDisplayMode('takings'))
        yield call(waitForNextScreenSaver)
        yield put(nextDisplayMode('lastDonation'))
    }
}

function* eventTimerInit() {
    //begin polling
    yield call(delay, 3000)

    while (true) {
        try {
            yield call(processEvents)

            yield put(resetDisplayMode())

            yield call(delay, 3000)
            var nextDisplayMode = yield select((store) => store.funding.nextDisplayMode)
            if (nextDisplayMode) {
                if (nextDisplayMode === 'lastDonation'){
                    var donations = yield select((store) => store.funding.lastDonations)
                    if (donations && donations.length > 0){
                        var randIndex = Math.floor(Math.random() * donations.length)
                        yield put(showDonation(donations[randIndex], false))
                    }
                }
                else {
                    yield put(displayMode(nextDisplayMode))
                }
                yield call(waitOnPage)
                yield put(resetNextDisplayMode())
            }

            yield put(resetDisplayMode())
        }
        catch (error) {
            console.log(error)
        }
    }
}

function* waitForNextScreenSaver() {
    yield call(delay, 30000)
}

function* waitOnPage() {
    yield call(delay, 10000)
    yield put(displayMode('thanks'))
    yield call(delay, 5000)
}

function* processEvents() {

    // check for new donations
    var state = yield select((store) => store.funding)
    // console.log(state)
    // loop over last donations - starting at the end
    for (var i = state.lastDonations.length - 1; i > -1; i--) {
        var lastD = state.lastDonations[i]
        // console.log(lastD)
        if (!state.processedDonations[lastD.donationId]) {
            yield put(displayMode('fireworks'))
            yield call(delay, 8000)
            yield put(showDonation(lastD, true))
            // yield call(delay, 4000)
            yield call(waitOnPage)

            // yield put(lastDonationProcessedId(lastD.donationId))
            return;
        }
    }

}

function* fundingSagaRoot() {
    yield takeLatest('persist/REHYDRATE', pollFundingInit)
    yield takeLatest('persist/REHYDRATE', eventTimerInit)
    yield takeLatest('persist/REHYDRATE', screensaverInit)
}

export default fundingSagaRoot