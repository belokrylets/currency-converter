import React from 'react';
import { FloatingLabel, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { CurrencySelectionTypes } from '../types/CurrencySelection';

const ToCurrency: React.FC = () => {
  const dispatch = useDispatch()
  const { resultField } = useTypeSelector(state => state.field);

  const hundleToSelect = (e: { preventDefault: () => void; target: { value: string; }; }) => {
    e.preventDefault();
    dispatch({
      type: CurrencySelectionTypes.TOSELECT,
      payload: { value: e.target.value }
    })
  }

  return (
    <InputGroup>
      <FormControl type='number' value={resultField} />
      <FloatingLabel controlId="floatingSelectGrid" label="Выбор валюты">
        <Form.Select onChange={hundleToSelect} aria-label="Floating label select example">
          <option value="RUB">Российский рубль</option>
          <option value="USD">Доллар США</option>
          <option value="EUR">Евро</option>
          <option value="CHF">Швейцарский франк</option>
          <option value="GBP">Фунт стерлингов</option>
          <option value="JPY">Японская йена</option>
          <option value="CNY">Китайский юань</option>
          <option value="TRY">Турецкая лира</option>
          <option value="BYN">Белорусский рубль</option>
          <option value="KZT">Казахстанский тенге</option>
        </Form.Select>
      </FloatingLabel>
    </InputGroup>
  );
}

export default ToCurrency;