import {call, put, select} from 'redux-saga/effects'
import {delay} from 'redux-saga'

import {
    auctionLiveMode,
    fireworks,
    instaDisplayHash,
    instaDisplayIndex,
    instaDisplaySrc,
    lastDonationProcessedId,
    nextAuctionItem, nextAvaPicture, nextFact, nextSponsor,
    showDonation,
    tickerDisplayData
} from "../action/index";
import {getAuctionDisplayData, getConfig, getInstaData, getInstaDisplayData, getTickerData} from "../redux/funding";


export function* loadInstaDisplayData() {
    var instaData = yield select(getInstaData)
    var instaDisplayData = yield select(getInstaDisplayData)
    var config = yield select(getConfig)
    //console.log(instaData)
    //console.log(instaDisplayData)

    yield put(instaDisplayHash(config.instaTag))
    if (instaData.length > 0) {
        var index = instaDisplayData.displayIndex + 1
        if (index >= instaData.length) {
            index = 0
        }
        yield put(instaDisplayIndex(index))
        yield put(instaDisplaySrc(instaData[index].thumbnailUrl))
    }
}

export function* loadTickerData() {
    var config = yield select(getConfig)
    var tickerData = yield select(getTickerData)

    //night total
    var data = {
        nightTarget: config.highTargetAmount - config.startingTotal,
        nightTargetLow: config.lowTargetAmount - config.startingTotal,
        nightTotal: tickerData.night,
        totalTarget: config.highTargetAmount - 0,
        totalTargetLow: config.highTargetAmount - 0, //hack to force amount as number
        total: tickerData.total
    }

    yield put(tickerDisplayData(data))
}

export function* loadDonationsData() {

    var state = yield select((store) => store.funding)

    if (!state.lastDonations || state.lastDonations.length === 0) {
        return;
    }
    // loop over last donations - starting at the end
    for (var i = state.lastDonations.length - 1; i > -1; i--) {
        var lastD = state.lastDonations[i]

        if (!state.processedDonations[lastD.donationId]) {
            yield put(fireworks('New Online Donation!!'))
            yield call(delay, 8000)

            yield put(showDonation(lastD, true))
            // // yield call(delay, 4000)
            // yield call(waitOnPage)

            yield put(lastDonationProcessedId(lastD.donationId))
            return;
        }
    }

    var donations = yield select((store) => store.funding.lastDonations)
    if (donations && donations.length > 0) {
        var randIndex = Math.floor(Math.random() * donations.length)
        yield put(showDonation(donations[randIndex], false))
    }
}

export function* loadDataForLiveAuction() {
    // if live mode = false, reset index & set live mode = true
    var auctionDisplayData = yield select(getAuctionDisplayData)
    if (auctionDisplayData.liveMode === false) {
        yield put(auctionLiveMode(true))
    }
}

export function* loadDataForAuction() {
    // if live mode = true, set mode = false & reset counter
    var auctionDisplayData = yield select(getAuctionDisplayData)
    if (auctionDisplayData.liveMode) {
        yield put(auctionLiveMode(true))
    } else {
        yield put(nextAuctionItem())
    }
}

export function* loadAvaPictureData() {
    yield put(nextAvaPicture())
}

export function* loadFactData() {
    yield put(nextFact())
}

export function* loadSponsorData() {
    yield put(nextSponsor())
}

export function* noop() {

}