export interface Country {
  code: string
  name: string
  currency: string
  symbol: string
  taxRate: number
  states?: Array<{ code: string; name: string }>
}

export const countries: Country[] = [
  {
    code: "US",
    name: "United States",
    currency: "USD",
    symbol: "$",
    taxRate: 0.08,
    states: [
      { code: "AL", name: "Alabama" },
      { code: "AK", name: "Alaska" },
      { code: "AZ", name: "Arizona" },
      { code: "AR", name: "Arkansas" },
      { code: "CA", name: "California" },
      { code: "CO", name: "Colorado" },
      { code: "CT", name: "Connecticut" },
      { code: "DE", name: "Delaware" },
      { code: "FL", name: "Florida" },
      { code: "GA", name: "Georgia" },
      { code: "HI", name: "Hawaii" },
      { code: "ID", name: "Idaho" },
      { code: "IL", name: "Illinois" },
      { code: "IN", name: "Indiana" },
      { code: "IA", name: "Iowa" },
      { code: "KS", name: "Kansas" },
      { code: "KY", name: "Kentucky" },
      { code: "LA", name: "Louisiana" },
      { code: "ME", name: "Maine" },
      { code: "MD", name: "Maryland" },
      { code: "MA", name: "Massachusetts" },
      { code: "MI", name: "Michigan" },
      { code: "MN", name: "Minnesota" },
      { code: "MS", name: "Mississippi" },
      { code: "MO", name: "Missouri" },
      { code: "MT", name: "Montana" },
      { code: "NE", name: "Nebraska" },
      { code: "NV", name: "Nevada" },
      { code: "NH", name: "New Hampshire" },
      { code: "NJ", name: "New Jersey" },
      { code: "NM", name: "New Mexico" },
      { code: "NY", name: "New York" },
      { code: "NC", name: "North Carolina" },
      { code: "ND", name: "North Dakota" },
      { code: "OH", name: "Ohio" },
      { code: "OK", name: "Oklahoma" },
      { code: "OR", name: "Oregon" },
      { code: "PA", name: "Pennsylvania" },
      { code: "RI", name: "Rhode Island" },
      { code: "SC", name: "South Carolina" },
      { code: "SD", name: "South Dakota" },
      { code: "TN", name: "Tennessee" },
      { code: "TX", name: "Texas" },
      { code: "UT", name: "Utah" },
      { code: "VT", name: "Vermont" },
      { code: "VA", name: "Virginia" },
      { code: "WA", name: "Washington" },
      { code: "WV", name: "West Virginia" },
      { code: "WI", name: "Wisconsin" },
      { code: "WY", name: "Wyoming" },
    ],
  },
  {
    code: "CA",
    name: "Canada",
    currency: "CAD",
    symbol: "C$",
    taxRate: 0.13,
    states: [
      { code: "AB", name: "Alberta" },
      { code: "BC", name: "British Columbia" },
      { code: "MB", name: "Manitoba" },
      { code: "NB", name: "New Brunswick" },
      { code: "NL", name: "Newfoundland and Labrador" },
      { code: "NS", name: "Nova Scotia" },
      { code: "ON", name: "Ontario" },
      { code: "PE", name: "Prince Edward Island" },
      { code: "QC", name: "Quebec" },
      { code: "SK", name: "Saskatchewan" },
      { code: "NT", name: "Northwest Territories" },
      { code: "NU", name: "Nunavut" },
      { code: "YT", name: "Yukon" },
    ],
  },
  {
    code: "GB",
    name: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    taxRate: 0.2,
  },
  {
    code: "AU",
    name: "Australia",
    currency: "AUD",
    symbol: "A$",
    taxRate: 0.1,
    states: [
      { code: "NSW", name: "New South Wales" },
      { code: "VIC", name: "Victoria" },
      { code: "QLD", name: "Queensland" },
      { code: "WA", name: "Western Australia" },
      { code: "SA", name: "South Australia" },
      { code: "TAS", name: "Tasmania" },
      { code: "ACT", name: "Australian Capital Territory" },
      { code: "NT", name: "Northern Territory" },
    ],
  },
  {
    code: "DE",
    name: "Germany",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.19,
  },
  {
    code: "FR",
    name: "France",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.2,
  },
  {
    code: "IT",
    name: "Italy",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.22,
  },
  {
    code: "ES",
    name: "Spain",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.21,
  },
  {
    code: "NL",
    name: "Netherlands",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.21,
  },
  {
    code: "BE",
    name: "Belgium",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.21,
  },
  {
    code: "CH",
    name: "Switzerland",
    currency: "CHF",
    symbol: "CHF",
    taxRate: 0.08,
  },
  {
    code: "AT",
    name: "Austria",
    currency: "EUR",
    symbol: "€",
    taxRate: 0.2,
  },
  {
    code: "SE",
    name: "Sweden",
    currency: "SEK",
    symbol: "SEK",
    taxRate: 0.25,
  },
  {
    code: "NO",
    name: "Norway",
    currency: "NOK",
    symbol: "NOK",
    taxRate: 0.25,
  },
  {
    code: "DK",
    name: "Denmark",
    currency: "DKK",
    symbol: "DKK",
    taxRate: 0.25,
  },
  {
    code: "JP",
    name: "Japan",
    currency: "JPY",
    symbol: "¥",
    taxRate: 0.1,
  },
  {
    code: "BR",
    name: "Brazil",
    currency: "BRL",
    symbol: "R$",
    taxRate: 0.17,
  },
]

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((country) => country.code === code)
}

export function getStatesByCountry(countryCode: string): Array<{ code: string; name: string }> {
  const country = getCountryByCode(countryCode)
  return country?.states || []
}

export function formatCurrency(amount: number, currency: string): string {
  const country = countries.find((c) => c.currency === currency)
  const symbol = country?.symbol || "$"

  return `${symbol}${amount.toFixed(2)}`
}

export function calculateTax(amount: number, countryCode: string): number {
  const country = getCountryByCode(countryCode)
  if (!country) return 0

  return amount * country.taxRate
}
