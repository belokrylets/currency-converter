export interface ICurrencyRatesState {
    currencyRatesState: string;
}

export enum CurrencyRatesStateTypes {
    STATE_CHANGE = 'STATE_CHANGE',
}

interface StateChangeAction {
    type: CurrencyRatesStateTypes.STATE_CHANGE;
    payload: { value: string }
}

export type CurrencyRatesState = StateChangeAction;