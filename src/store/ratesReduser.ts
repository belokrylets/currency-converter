import { IRate, Rates, RatesTypes } from "../types/rates";

const defaultState: IRate = {
  USD: {
    name: 'Доллар США',
    abbreviation: 'USD',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  RUB: {
    name: 'Российский рубль',
    abbreviation: 'RUB',
    rates: {
      USD: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  EUR: {
    name: 'Евро',
    abbreviation: 'EUR',
    rates: {
      RUB: 0,
      USD: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  CHF: {
    name: 'Швейцарский франк',
    abbreviation: 'CHF',
    rates: {
      RUB: 0,
      EUR: 0,
      USD: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  GBP: {
    name: 'Фунт стерлингов',
    abbreviation: 'GBP',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      USD: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  JPY: {
    name: 'Японская йена',
    abbreviation: 'JPY',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      USD: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  CNY: {
    name: 'Китайский юань',
    abbreviation: 'CNY',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      USD: 0,
      TRY: 0,
      BYN: 0,
      KZT: 0
    }
  },
  TRY: {
    name: 'Турецкая лира',
    abbreviation: 'TRY',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      USD: 0,
      BYN: 0,
      KZT: 0
    }
  },
  BYN: {
    name: 'Белорусский рубль',
    abbreviation: 'BYN',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      USD: 0,
      KZT: 0
    }
  },
  KZT: {
    name: 'Казахстанский тенге',
    abbreviation: 'KZT',
    rates: {
      RUB: 0,
      EUR: 0,
      CHF: 0,
      GBP: 0,
      JPY: 0,
      CNY: 0,
      TRY: 0,
      BYN: 0,
      USD: 0
    }
  }
}

export const ratesReduser = (state = defaultState, action: Rates): IRate => {
  switch (action.type) {
    case RatesTypes.GET_RATES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}