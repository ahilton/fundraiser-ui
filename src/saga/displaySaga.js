import {put, select} from 'redux-saga/effects'
import {infoModeIndex, instaDisplayHash, instaDisplayIndex, instaDisplaySrc} from "../action/index";
import {getConfig, getInstaData, getInstaDisplayData} from "../redux/funding";


export function* loadInstaDisplayData() {
    var instaData = yield select(getInstaData)
    var instaDisplayData = yield select(getInstaDisplayData)
    var config = yield select(getConfig)
    //console.log(instaData)
    //console.log(instaDisplayData)

    if (instaData.length > 0) {
        var index = instaDisplayData.displayIndex + 1
        if (index >= instaData.length) {
            index = 0
        }
        yield put(instaDisplayIndex(index))
        yield put(instaDisplaySrc(instaData[index].thumbnailUrl))
        yield put(instaDisplayHash(config.instaTag))
    }
}

export function* noop() {

}