import {put, select} from 'redux-saga/effects'
import {instaDisplayHash, instaDisplayIndex, instaDisplaySrc, tickerDisplayData} from "../action/index";
import {getConfig, getInstaData, getInstaDisplayData, getTickerData} from "../redux/funding";


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

export function* noop() {

}