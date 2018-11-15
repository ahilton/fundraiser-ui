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
export const INSTA_UPDATE = 'INSTA_UPDATE'
export const DONATIONS_UPDATE = 'DONATIONS_UPDATE'
export const EVENTS_UPDATE = 'EVENTS_UPDATE'
export const LAST_EVENT_PROCESSED = 'LAST_EVENT_PROCESSED'
export const TICKER_UPDATE = 'TICKER_UPDATE'
export const TICKER_MODE_INDEX = 'TICKER_MODE_INDEX'
export const INFO_MODE_INDEX = 'INFO_MODE_INDEX'
export const INSTA_DISPLAY_INDEX = 'INSTA_DISPLAY_INDEX'
export const INSTA_DISPLAY_SRC = 'INSTA_DISPLAY_SRC'
export const INSTA_DISPLAY_HASH = 'INSTA_DISPLAY_HASH'
export const TICKER_DISPLAY_DATA = 'TICKER_DISPLAY_DATA'
export const FIREWORKS = 'FIREWORKS'
export const AUCTION_LIVE_MODE = 'AUCTION_LIVE_MODE'
export const NEXT_AUCTION_ITEM = 'NEXT_AUCTION_ITEM'
export const PREVIOUS_AUCTION_ITEM = 'PREVIOUS_AUCTION_ITEM'
export const AUCTION_DISPLAY_INDEX = 'AUCTION_DISPLAY_INDEX'

export const showDonation = (donation, isNew) => {
    return {type: SHOW_DONATION, data: {
        ...donation,
        isNew: isNew
    }}
}
export const lastDonationProcessedId = (id) => {
    return {type: LAST_DONATION_PROCESSED_ID, id: id}
}
export const fundraiserTotal = (total) => {
    return {type: FUNDRAISER_TOTAL, total: total}
}
export const fundraiserTarget = (total) => {
    return {type: FUNDRAISER_TARGET, total: total}
}

export const displayMode = (displayMode) => {
    return {type: DISPLAY_MODE, displayMode: displayMode}
}

export const configUpdate = (data) => {
    return {type: CONFIG_UPDATE, data: data}
}
export const modeUpdate = (data) => {
    return {type: MODE_UPDATE, data: data}
}
export const instaUpdate = (data) => {
    return {type: INSTA_UPDATE, data: data}
}
export const donationsUpdate = (data) => {
    return {type: DONATIONS_UPDATE, data: data}
}
export const eventsUpdate = (data) => {
    return {type: EVENTS_UPDATE, data: data}
}
export const lastEventProcessed = (data) => {
    return {type: LAST_EVENT_PROCESSED, data: data}
}
export const tickerUpdate = (data) => {
    return {type: TICKER_UPDATE, data: data}
}
export const tickerModeIndex = (index) => {
    return {type: TICKER_MODE_INDEX, data: index}
}
export const infoModeIndex = (index) => {
    return {type: INFO_MODE_INDEX, data: index}
}
export const instaDisplayIndex = (index) => {
    return {type: INSTA_DISPLAY_INDEX, data: index}
}
export const auctionDisplayIndex = (index) => {
    return {type: AUCTION_DISPLAY_INDEX, data: index}
}
export const instaDisplaySrc = (src) => {
    return {type: INSTA_DISPLAY_SRC, data: src}
}
export const instaDisplayHash = (hash) => {
    return {type: INSTA_DISPLAY_HASH, data: hash}
}
export const tickerDisplayData = (data) => {
    return {type: TICKER_DISPLAY_DATA, data: data}
}
export const fireworks = (msg) => {
    return {type: FIREWORKS, data: msg}
}
export const auctionLiveMode = (enabled) => {
    return {type: AUCTION_LIVE_MODE, data: enabled}
}
export const nextAuctionItem = () => {
    return {type: NEXT_AUCTION_ITEM}
}
export const previousAuctionItem = () => {
    return {type: PREVIOUS_AUCTION_ITEM}
}
export const NEXT_AVA_PICTURE = 'NEXT_AVA_PICTURE'
export const nextAvaPicture = () => {
    return {type: NEXT_AVA_PICTURE}
}
export const NEXT_FACT = 'NEXT_FACT'
export const nextFact = () => {
    return {type: NEXT_FACT}
}
export const NEXT_SPONSOR = 'NEXT_SPONSOR'
export const nextSponsor = () => {
    return {type: NEXT_SPONSOR}
}