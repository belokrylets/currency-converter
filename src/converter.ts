import { IRate } from './types/rates'

const converter = (rate: IRate, from: string, to: string, value: number): number => {

  if (from === to) {
    return value;
  }
  const result = rate[from].rates[to] * value
  return result;
};

export default converter;