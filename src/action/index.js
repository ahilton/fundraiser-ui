export const DONATION_START_TOTAL = 'DONATION_START_TOTAL'
export const DONATION_CURRENT_TOTAL = 'DONATION_CURRENT_TOTAL'
export const LAST_DONATIONS = 'LAST_DONATIONS'
export const LAST_DONATION_PROCESSED_ID = 'LAST_DONATION_PROCESSED_ID'

export const FUNDRAISER_TARGET = 'FUNDRAISER_TARGET'

export const FUNDRAISER_TOTAL = 'FUNDRAISER_TOTAL'

export const RESET_DONATION_TOTAL = 'RESET_DONATION_TOTAL'
export const SHOW_DONATION = 'SHOW_DONATION'
export const DISPLAY_MODE = 'DISPLAY_MODE'
export const RESET_DISPLAY_MODE = 'RESET_DISPLAY_MODE'
export const NEXT_DISPLAY_MODE = 'NEXT_DISPLAY_MODE'
export const RESET_NEXT_DISPLAY_MODE = 'RESET_NEXT_DISPLAY_MODE'

export const CONFIG_UPDATE = 'CONFIG_UPDATE'
export const MODE_UPDATE = 'MODE_UPDATE'
export const TICKER_MODE_INDEX = 'TICKER_MODE_INDEX'
export const INFO_MODE_INDEX = 'INFO_MODE_INDEX'

export const resetDonationTotal = () => {
    return {type: RESET_DONATION_TOTAL}
}

export const fundraiserTotal = (total) => {
    return {type: FUNDRAISER_TOTAL, total: total}
}
export const fundraiserTarget = (total) => {
    return {type: FUNDRAISER_TARGET, total: total}
}
export const donationStartTotal = (total) => {
    return {type: DONATION_START_TOTAL, total: total}
}
export const donationCurrentTotal = (total) => {
    return {type: DONATION_CURRENT_TOTAL, total: total}
}

export const lastDonations = (donations) => {
    return {type: LAST_DONATIONS, donations: donations}
}
export const lastDonationProcessedId = (id) => {
    return {type: LAST_DONATION_PROCESSED_ID, id: id}
}

export const showDonation = (donation, isNew) => {
    return {
        type: SHOW_DONATION, data: {
            donation: donation,
            isNew: isNew
        }
    }
}
export const resetDisplayMode = () => {
    return {type: RESET_DISPLAY_MODE}
}
export const displayMode = (displayMode) => {
    return {type: DISPLAY_MODE, displayMode: displayMode}
}
export const resetNextDisplayMode = () => {
    return {type: RESET_NEXT_DISPLAY_MODE}
}
export const nextDisplayMode = (displayMode) => {
    return {type: NEXT_DISPLAY_MODE, displayMode: displayMode}
}


export const configUpdate = (data) => {
    return {type: CONFIG_UPDATE, data: data}
}
export const modeUpdate = (data) => {
    return {type: MODE_UPDATE, data: data}
}
export const tickerModeIndex = (index) => {
    return {type: TICKER_MODE_INDEX, data: index}
}
export const infoModeIndex = (index) => {
    return {type: INFO_MODE_INDEX, data: index}
}