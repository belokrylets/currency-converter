import { CurrencyRatesState, CurrencyRatesStateTypes, ICurrencyRatesState } from "../types/currencyRatesState"

const defaultState: ICurrencyRatesState = {
    currencyRatesState: 'USD',
}


export const currencyRatesStateReduser = (state = defaultState, action: CurrencyRatesState): ICurrencyRatesState => {
    switch (action.type) {
        case CurrencyRatesStateTypes.STATE_CHANGE:
            return { ...state, currencyRatesState: action.payload.value };
        default:
            return state;
    }
}
