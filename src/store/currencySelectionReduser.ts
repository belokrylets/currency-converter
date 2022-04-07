import { CurrencySelection, CurrencySelectionTypes, ICurrencySelection } from "../types/CurrencySelection";

const defaultState: ICurrencySelection = {
    from: 'USD',
    to: 'RUB'
}
export const currencySelectionReduser = (state = defaultState, action: CurrencySelection): ICurrencySelection => {
    switch (action.type) {
        case CurrencySelectionTypes.FROMSELECT:
            return { ...state, from: action.payload.value };
        case CurrencySelectionTypes.TOSELECT:
            return { ...state, to: action.payload.value };
        default:
            return state;
    }
}