
interface IDataCurrency {
    name: string;
    abbreviation: string;
    rates: {
        [key: string]: number;
    }
}
export interface IRate {
    [key: string]: IDataCurrency;
    USD: IDataCurrency;
    RUB: IDataCurrency;
    EUR: IDataCurrency;
    CHF: IDataCurrency;
    GBP: IDataCurrency;
    JPY: IDataCurrency;
    CNY: IDataCurrency;
    TRY: IDataCurrency;
    BYN: IDataCurrency;
    KZT: IDataCurrency;
}

export interface IResponce {
    [key: string]: number;
    USDRUB: number;
    USDEUR: number;
    USDCHF: number;
    USDGBP: number;
    USDJPY: number;
    USDCNY: number;
    USDTRY: number;
    USDBYN: number;
    USDKZT: number;
}

export enum RatesTypes {
    GET_RATES = 'GET_RATES',
}

interface GetRatesActons {
    type: RatesTypes.GET_RATES;
    payload: IRate
}

export type Rates = GetRatesActons;