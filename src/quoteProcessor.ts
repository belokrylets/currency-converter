import { IRate, IResponce } from "./types/rates"

export const quoteProcessor = (rate: IRate, fetchRates: IResponce): IRate => {
  Object.entries(fetchRates).forEach(item => {
    rate.USD.rates[item[0].slice(3)] = item[1]
  })

  Object.keys(rate).forEach(rateKey => {
    if (rateKey !== 'USD') {
      const currency = rate.USD.rates[rateKey]
      Object.keys(fetchRates).forEach(key => {
        if (rateKey === key.slice(3)) {
          rate[rateKey].rates.USD = 1 / currency
        } else {
          rate[rateKey].rates[key.slice(3)] = fetchRates[key] / currency
        }
      })
    }
  })
  return rate;
}
