import axios from "axios";
import { Dispatch } from "redux";
import { quoteProcessor } from "../quoteProcessor";
import { IRate, Rates, RatesTypes } from "../types/rates";

export const fetchRates = (rate: IRate) => {
    return async (dispatch: Dispatch<Rates>) => {
        try {
            const response = await axios.get('http://apilayer.net/api/live?access_key=34c0bffa1a0c68285c23706219b17319&currencies=RUB,EUR,CHF,GBP,JPY,CNY,TRY,BYN,KZT&source=USD&format=1');
            const result = quoteProcessor(rate, response.data.quotes);
            dispatch({ type: RatesTypes.GET_RATES, payload: result })
        } catch (error) {
            console.log(error)
        }
    }
}