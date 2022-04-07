import { uniqueId } from 'lodash';
import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { CurrencyRatesStateTypes } from '../types/currencyRatesState';
import { IRate } from '../types/rates';

const CurrencyRates: React.FC = () => {
  const rates = useTypeSelector(state => state.rates);
  const dispatch = useDispatch();
  const { currencyRatesState } = useTypeSelector(state => state.currencyRatesState);
  const arrayRate = (value: string, rates: IRate): [string, number][] => {
    return Object.entries(rates[value].rates);
  }

  const hundleRateSelect = (e: { preventDefault: () => void; target: { value: string; }; }) => {
    e.preventDefault();
    dispatch({
      type: CurrencyRatesStateTypes.STATE_CHANGE,
      payload: { value: e.target.value }
    })
  }

  return (
    <>
      <div>
        <Form.Select onChange={hundleRateSelect} aria-label="Floating label select example">
          <option value="USD">Доллар США</option>
          <option value="RUB">Российский рубль</option>
          <option value="EUR">Евро</option>
          <option value="CHF">Швейцарский франк</option>
          <option value="GBP">Фунт стерлингов</option>
          <option value="JPY">Японская йена</option>
          <option value="CNY">Китайский юань</option>
          <option value="TRY">Турецкая лира</option>
          <option value="BYN">Белорусский рубль</option>
          <option value="KZT">Казахстанский тенге</option>
        </Form.Select>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
            </tr>
          </thead>
          <tbody>
            {arrayRate(currencyRatesState, rates).map((rate: [string, number]) => (
              <tr key={uniqueId()}>
                <td>{rate[0]}</td>
                <td>{rate[1]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CurrencyRates;