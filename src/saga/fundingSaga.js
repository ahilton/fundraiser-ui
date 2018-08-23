import {call, put, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {donationCurrentTotal, resetDisplayMode, lastDonations, showDonation} from '../action'
import {fundraiserTarget, fundraiserTotal} from "../action/index";
// import {getLastEvent, getLastTimestamp, getTickData} from "../redux/funding";
const axios = require('axios')

function* pollFundingPage() {

    //var lastTimestamp = yield select((store) => getLastTimestamp(store))
    var response
    try {
        response = yield call(
            axios.get,
            'http://localhost:8080/api/state'
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
        yield call(delay, 2000)
    }
}

function* eventTimerInit() {
    //begin polling
    yield call(delay, 3000)

    while (true) {
        try {
            yield call(processEvents)
            yield put(resetDisplayMode())
        }
        catch (error) {
            console.log(error)
        }
        yield call(delay, 3000)
    }
}

function* processEvents() {

    // check for new donations
    var state = yield select((store) => store.funding)
    // console.log(state)
    // loop over last donations - starting at the end
    for (var i = state.lastDonations.length - 1; i > -1; i--) {
        var lastD = state.lastDonations[i]
        console.log(lastD)
        if (!state.processedDonations[lastD.donationId]) {
            yield put(showDonation(lastD, true))
            yield call(delay, 4000)
            // yield put(lastDonationProcessedId(lastD.donationId))
            return;
        }
    }

}

function* fundingSagaRoot() {
    yield takeLatest('persist/REHYDRATE', pollFundingInit)
    yield takeLatest('persist/REHYDRATE', eventTimerInit)
    // yield takeEvery(PUSH_CHANNEL_EVENT, pushChannelEvent)
    // yield takeLatest(ENABLE_PRICE_TICK, enablePriceTick)
}

export default fundingSagaRoot