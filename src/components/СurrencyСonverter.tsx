import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRates } from '../action-creator/rates';
import converter from '../converter';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { FieldTypes } from '../types/field';
import FromCurrency from './FromCurrencies';
import ToCurrency from './ToCurrency ';

const СurrencyСonverter: React.FC = () => {

    const rates = useTypeSelector(state => state.rates)

    useEffect(() => {
        dispatch(fetchRates(rates))
    }, [])

    const dispatch = useDispatch()
    const { entryField } = useTypeSelector(state => state.field);
    const { from, to } = useTypeSelector(state => state.currencySelect);


    useEffect(() => {
        const result = converter(rates, from, to, Number(entryField));
        dispatch({
            type: FieldTypes.RESULT,
            payload: result.toFixed(2),
        })
    }, [entryField, from, to])

    return (
        <div className='converter'>
            <FromCurrency />
            <div className='arrow'>→</div>
            <ToCurrency />
        </div>
    );
}

export default СurrencyСonverter;