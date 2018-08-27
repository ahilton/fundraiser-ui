import {
    DONATION_START_TOTAL,
    DONATION_CURRENT_TOTAL,
    LAST_DONATIONS,
    LAST_DONATION_PROCESSED_ID,
    FUNDRAISER_TARGET,
    FUNDRAISER_TOTAL,
    RESET_DONATION_TOTAL,
    SHOW_DONATION,
    DISPLAY_MODE,
    RESET_DISPLAY_MODE,
    NEXT_DISPLAY_MODE,
    RESET_NEXT_DISPLAY_MODE
} from '../action'

export const fundingInitialState = {
    donationStartTotal:58930,
    donationCurrentTotal:58930,
    lastDonations:[],
    processedDonations:{},
    lastDonationProcessedId:null,
    fundraiserTotal:100,
    fundraiserTarget:10000,
    showDonationData:null,
    displayMode:null,
    nextDisplayMode:null
}

export const getFundingState = state => state.funding
export const getDonationStartTotal = state => getFundingState(state).donationStartTotal
export const getDonationCurrentTotal = state => getFundingState(state).donationCurrentTotal
export const getShowDonationData = state => getFundingState(state).showDonationData
export const getFundraiserTarget = state => getFundingState(state).fundraiserTarget
export const getFundraiserTotal = state => getFundingState(state).fundraiserTotal
export const getDisplayMode = state => getFundingState(state).displayMode
export const getProcessedDonations = state => getFundingState(state).processedDonations

const funding = (state = fundingInitialState, action) => {
    switch(action.type) {
        case SHOW_DONATION:
            var x = {
                ...state.processedDonations
            }
            x[action.data.donation.donationId]=action.data.donation
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