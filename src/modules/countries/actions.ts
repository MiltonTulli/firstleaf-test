import { ActionTypes } from './types';
import { fetchAllCountries, fetchCountriesByPartialName } from '../../utils/api';
import { Dispatch } from 'redux';
import { IState } from '../index';
import { AxiosResponse } from 'axios';
import { Country } from '../../interfaces';

export const getCountriesStart: Action = () => ({
  type: ActionTypes.GET_COUNTRIES_START
});

export const getCountriesEnd: Action = () => ({
  type: ActionTypes.GET_COUNTRIES_END
});

export const getCountriesSuccess = (
  countries: Country[],
  withFilter: boolean = false
): IPayloadAction<{ countries: Country[]; withFilter: boolean }> => ({
  type: ActionTypes.GET_COUNTRIES_SUCCESS,
  payload: { countries, withFilter }
});

export const getCountriesFail: Action = () => ({
  type: ActionTypes.GET_COUNTRIES_FAIL
});

export const getAllCountries: asyncThunkActionCreator = () => async (dispatch, getState) => {
  dispatch(getCountriesStart());
  try {
    const response: AxiosResponse<Country[]> = await fetchAllCountries();
    dispatch(getCountriesSuccess(response.data));
  } catch (error) {
    dispatch(getCountriesFail());
  }
  dispatch(getCountriesEnd());
};

export const getCountriesByName: asyncThunkActionCreatorWithParams<string> = (
  country?: string
) => async dispatch => {
  dispatch(getCountriesStart());
  try {
    if (!!country) {
      const response: AxiosResponse<Country[]> = await fetchCountriesByPartialName(country);
      dispatch(getCountriesSuccess(response.data, true));
    } else {
      const response: AxiosResponse<Country[]> = await fetchAllCountries();
      dispatch(getCountriesSuccess(response.data, false));
    }
  } catch (error) {
    dispatch(getCountriesFail());
  }
  dispatch(getCountriesEnd());
};

interface IBaseAction {
  type: string;
}
interface IPayloadAction<P = any> extends IBaseAction {
  payload: P;
}
export type Action = () => IBaseAction;

export type asyncThunkActionCreator = () => (
  dispatch: Dispatch,
  getState: () => IState
) => Promise<void>;

export type asyncThunkActionCreatorWithParams<P> = (
  p: P
) => (dispatch: Dispatch, getState: () => IState) => Promise<void>;
