export const PHONE_TEL = '+16045391611'
export const PHONE_DISPLAY = '(604) 539-1611'
export const PHARMACY_EMAIL = 'hello@familycarepharmacy.com'

export const ADDRESS_LINE1 = '20020 84 Ave'
export const ADDRESS_CITY = 'Langley, BC'
export const ADDRESS_FULL = `${ADDRESS_LINE1}, ${ADDRESS_CITY}`

const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`)

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=en&z=16&output=embed`
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
