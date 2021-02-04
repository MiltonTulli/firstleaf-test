import update from 'immutability-helper';
import { Country } from '../../interfaces';
import { ActionTypes } from './types';

export interface ICountriesReducerState {
  loading: boolean;
  error: boolean;
  countries: Country[];
  countriesHasFilter: boolean;
}

export const countriesInitialState: ICountriesReducerState = {
  loading: false,
  error: false,
  countries: [],
  countriesHasFilter: false
};

export interface IPostsPayload {
  countries?: Country[];
  withFilter?: boolean;
}

export default (
  state = countriesInitialState,
  { type, payload }: { type: ActionTypes; payload? }
) => {
  switch (type) {
    case ActionTypes.GET_COUNTRIES_START:
      return update(state, {
        loading: { $set: true }
      });
    case ActionTypes.GET_COUNTRIES_END:
      return update(state, {
        loading: { $set: false }
      });
    case ActionTypes.GET_COUNTRIES_SUCCESS:
      return update(state, {
        countries: { $set: payload.countries },
        error: { $set: false },
        countriesHasFilter: { $set: payload.withFilter }
      });
    case ActionTypes.GET_COUNTRIES_FAIL:
      return update(state, {
        error: { $set: true }
      });
    default:
      return state;
  }
};
