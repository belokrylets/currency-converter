export interface ICurrencySelection {
    from: string;
    to: string;
}
export enum CurrencySelectionTypes {
    FROMSELECT = 'FROMSELECT',
    TOSELECT = 'TOSELECT',
}

interface FromSelectAction {
    type: CurrencySelectionTypes.FROMSELECT,
    payload: { value: string }
}
interface ToSelectAction {
    type: CurrencySelectionTypes.TOSELECT,
    payload: { value: string }
}
export type CurrencySelection = FromSelectAction | ToSelectAction;