export interface IField {
    entryField: string;
    resultField: string;
}

export enum FieldTypes {
    INPUT = 'INPUT',
    RESULT = 'RESULT',
}

interface InputAction {
    type: FieldTypes.INPUT;
    payload: { value: string };
}

interface ResultAction {
    type: FieldTypes.RESULT;
    payload: string;
}

export type Field = InputAction | ResultAction;