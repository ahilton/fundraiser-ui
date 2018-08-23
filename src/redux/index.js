import {combineReducers} from 'redux'
import funding, {fundingInitialState} from './funding'
// import settings, {settingsInitialState} from "./settings";

export default combineReducers({
    funding
    // , settings
})

export const initialState={
    funding: fundingInitialState
    // , settings: fundingInitialState
}