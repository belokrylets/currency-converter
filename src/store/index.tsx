import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { currencyRatesStateReduser } from "./currencyRatesStateReduser";
import { currencySelectionReduser } from "./currencySelectionReduser";
import { fieldReduser } from "./fieldsReduser";
import { ratesReduser } from "./ratesReduser";

const rootReduser = combineReducers({
  field: fieldReduser,
  currencySelect: currencySelectionReduser,
  rates: ratesReduser,
  currencyRatesState: currencyRatesStateReduser,
});
export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReduser>