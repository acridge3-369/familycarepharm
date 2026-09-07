export const PHONE_TEL = '+16045391611'
export const PHONE_DISPLAY = '(604) 539-1611'
export const AFTER_HOURS_PHONE_TEL = '+16048331641'
export const AFTER_HOURS_PHONE_DISPLAY = '(604) 833-1641'
export const PHARMACY_EMAIL = 'gcridge3@gmail.com'

export const ADDRESS_LINE1 = '20020 84 Ave B-105'
export const ADDRESS_CITY = 'Langley Twp, BC V2Y 5K9'
export const ADDRESS_FULL = `${ADDRESS_LINE1}, ${ADDRESS_CITY}`
export const BUSINESS_NAME = 'Family Care Pharmacy'

const MAP_QUERY = encodeURIComponent(`${BUSINESS_NAME}, ${ADDRESS_FULL}`)

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=16&output=embed`
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
