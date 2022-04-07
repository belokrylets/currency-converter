import { IField, Field, FieldTypes } from "../types/field";


const defaultState: IField = {
    entryField: '',
    resultField: '0',
}

export const fieldReduser = (state = defaultState, action: Field): IField => {
    switch (action.type) {
        case FieldTypes.INPUT:
            return { ...state, entryField: action.payload.value };
        case FieldTypes.RESULT:
            return { ...state, resultField: action.payload };
        default:
            return state;
    }
}
