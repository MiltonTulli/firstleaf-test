import { combineReducers } from 'redux';
import countries from './countries';
import { ICountriesReducerState, countriesInitialState } from './countries/reducer';

const mainReducer = combineReducers({
  countriesReducer: countries
});

export interface IState {
  countriesReducer: ICountriesReducerState;
}

export const initialState: IState = {
  countriesReducer: countriesInitialState
};

export default mainReducer;
