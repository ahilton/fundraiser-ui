import {call} from 'redux-saga/effects'

import fundingSagaRoot from './fundingSaga'

export default function* root () {
    yield [
        call(fundingSagaRoot)
    ]
}