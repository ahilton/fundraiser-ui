import {
    CONFIG_UPDATE,
    DISPLAY_MODE,
    DONATION_CURRENT_TOTAL,
    DONATION_START_TOTAL,
    FUNDRAISER_TARGET,
    FUNDRAISER_TOTAL,
    LAST_DONATION_PROCESSED_ID,
    LAST_DONATIONS,
    NEXT_DISPLAY_MODE,
    RESET_DISPLAY_MODE,
    RESET_NEXT_DISPLAY_MODE,
    SHOW_DONATION
} from '../action'
import {INFO_MODE_INDEX, MODE_UPDATE, TICKER_MODE_INDEX} from "../action/index";

export const fundingInitialState = {
    donationStartTotal: 58930,
    donationCurrentTotal: 58930,
    lastDonations: [],
    processedDonations: {},
    lastDonationProcessedId: null,
    fundraiserTotal: 100,
    fundraiserTarget: 10000,
    showDonationData: null,
    displayMode: null,
    nextDisplayMode: null,
    config: {},
    modes: {},
    modeIndex: {
        ticker: 0,
        info: 0
    }
}

export const getFundingState = state => state.funding
export const getDonationStartTotal = state => getFundingState(state).donationStartTotal
export const getDonationCurrentTotal = state => getFundingState(state).donationCurrentTotal
export const getShowDonationData = state => getFundingState(state).showDonationData
export const getFundraiserTarget = state => getFundingState(state).fundraiserTarget
export const getFundraiserTotal = state => getFundingState(state).fundraiserTotal
export const getDisplayMode = state => getFundingState(state).displayMode
export const getModes = state => getFundingState(state).modes
export const getModeIndex = state => getFundingState(state).modeIndex
export const getProcessedDonations = state => getFundingState(state).processedDonations

// 0: {key: "INSTA_TAG", value: "avasjourney"}
// 1: {key: "MESSAGE", value: "We love you Ava!"}
// 2: {key: "STARTING_TOTAL", value: "220000"}
// 3: {key: "STARTING_DONATIONS", value: "200000"}
// 4: {key: "TOTAL_DONATIONS", value: "230000"}
// 5: {key: "LOW_TARGET_NAME", value: "Cost of Vaccine"}
// 6: {key: "LOW_TARGET_AMOUNT", value: "300000"}
// 7: {key: "HIGH_TARGET_NAME", value: "NYC Relocation"}
// 8: {key: "HIGH_TARGET_AMOUNT", value: "350000"}

//     [{"key":"AUCTION_MODE","value":"false"},
//     {"key":"TARGET_TICKER_MODE","value":"true"},
//     {"key":"TOTAL_ON_NIGHT_MODE","value":"true"},
//     {"key":"LAST_DONATION_MODE","value":"false"},
//     {"key":"MESSAGE_MODE","value":"false"},
//     {"key":"INSTA_MODE","value":"true"},
//     {"key":"AVA_INFO_MODE","value":"true"}]


function extractValueFromRawConfig(data, key, defaultValue) {
    var element = data.find(x => x.key === key)
    return element ? element.value : defaultValue
}

const funding = (state = fundingInitialState, action) => {
    switch (action.type) {
        case CONFIG_UPDATE:
            return {
                ...state,
                config: {
                    instaTag: extractValueFromRawConfig(action.data, 'INSTA_TAG', state.config.instaTag),
                    message: extractValueFromRawConfig(action.data, 'MESSAGE', state.config.message),
                    startingTotal: extractValueFromRawConfig(action.data, 'STARTING_TOTAL', state.config.startingTotal),
                    startingDonations: extractValueFromRawConfig(action.data, 'STARTING_DONATIONS', state.config.startingDonations),
                    lowTargetName: extractValueFromRawConfig(action.data, 'LOW_TARGET_NAME', state.config.lowTargetName),
                    lowTargetAmount: extractValueFromRawConfig(action.data, 'LOW_TARGET_AMOUNT', state.config.lowTargetAmount),
                    highTargetName: extractValueFromRawConfig(action.data, 'HIGH_TARGET_NAME', state.config.highTargetName),
                    highTargetAmount: extractValueFromRawConfig(action.data, 'HIGH_TARGET_AMOUNT', state.config.highTargetAmount)
                }
            }
        case MODE_UPDATE:
            return {
                ...state,
                modes: {
                    auction: extractValueFromRawConfig(action.data, 'AUCTION_MODE', state.modes.auction),
                    targetTicker: extractValueFromRawConfig(action.data, 'TARGET_TICKER_MODE', state.modes.targetTicker),
                    totalOnNight: extractValueFromRawConfig(action.data, 'TOTAL_ON_NIGHT_MODE', state.modes.totalOnNight),
                    lastDonation: extractValueFromRawConfig(action.data, 'LAST_DONATION_MODE', state.modes.lastDonation),
                    message: extractValueFromRawConfig(action.data, 'MESSAGE_MODE', state.modes.message),
                    insta: extractValueFromRawConfig(action.data, 'INSTA_MODE', state.modes.insta),
                    avaInfo: extractValueFromRawConfig(action.data, 'AVA_INFO_MODE', state.modes.avaInfo)
                }
            }
        case TICKER_MODE_INDEX:
            return {
                ...state,
                modeIndex: {
                    ...state.modeIndex,
                    ticker: action.data
                }
            }
        case INFO_MODE_INDEX:
            return {
                ...state,
                modeIndex: {
                    ...state.modeIndex,
                    info: action.data
                }
            }
        case SHOW_DONATION:
            var x = {
                ...state.processedDonations
            }
            x[action.data.donation.donationId] = action.data.donation
            return {
                ...state,
                processedDonations: {
                    ...x
                },
                showDonationData: action.data,
                displayMode: 'donation'
            }
        case RESET_DISPLAY_MODE:
            return {
                ...state,
                displayMode: null
            }
        case DISPLAY_MODE:
            return {
                ...state,
                displayMode: action.displayMode
            }
        case RESET_NEXT_DISPLAY_MODE:
            return {
                ...state,
                nextDisplayMode: null
            }
        case NEXT_DISPLAY_MODE:
            return {
                ...state,
                nextDisplayMode: action.displayMode
            }
        case DONATION_START_TOTAL:
            return {
                ...state,
                donationStartTotal: action.total
            }
        case DONATION_CURRENT_TOTAL:
            return {
                ...state,
                donationCurrentTotal: action.total
            }
        case FUNDRAISER_TARGET:
            return {
                ...state,
                fundraiserTarget: action.total
            }
        case FUNDRAISER_TOTAL:
            return {
                ...state,
                fundraiserTotal: action.total
            }
        case LAST_DONATIONS:
            return {
                ...state,
                lastDonations: action.donations
            }
        case LAST_DONATION_PROCESSED_ID:
            return {
                ...state,
                lastDonationProcessedId: action.id
            }

        default:
            return state
    }
}

export default funding