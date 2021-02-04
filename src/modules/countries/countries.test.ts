/**
 * @jest-environment node
 */

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import nock from 'nock';
import httpAdapter from 'axios/lib/adapters/http';
import reducer, { countriesInitialState } from './reducer';
import { initialState } from '../index';
import { ActionTypes } from './types';
import { countries } from '../../__mocks__';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

axios.defaults.adapter = httpAdapter;

describe('Countries Reducer', () => {
  describe('actions', () => {
    afterEach(() => {
      //   fetchMock.restore();
    });

    it('getCountriesStart', () => {
      expect(actions.getCountriesStart()).toEqual({
        type: ActionTypes.GET_COUNTRIES_START
      });
    });
    it('getCountriesEnd', () => {
      expect(actions.getCountriesEnd()).toEqual({
        type: ActionTypes.GET_COUNTRIES_END
      });
    });
    it('getCountriesSuccess', () => {
      expect(actions.getCountriesSuccess([])).toEqual({
        type: ActionTypes.GET_COUNTRIES_SUCCESS,
        payload: { countries: [], withFilter: false }
      });
    });
    it('getCountriesEnd', () => {
      expect(actions.getCountriesFail()).toEqual({
        type: ActionTypes.GET_COUNTRIES_FAIL
      });
    });
    it('getAllCountries', () => {
      const data = { countries: countries };

      nock('https://restcountries.eu/rest/v2')
        .get('/all')
        .reply(200, data.countries);

      const expectedActions = [
        { type: ActionTypes.GET_COUNTRIES_START },

        {
          type: ActionTypes.GET_COUNTRIES_SUCCESS,
          payload: { countries: data.countries, withFilter: false }
        },
        { type: ActionTypes.GET_COUNTRIES_END }
      ];

      const store = mockStore(initialState);

      store.dispatch(actions.getAllCountries()).then(() => {
        expect(store.getActions()).toStrictEqual(expectedActions);
      });
    });
    it('getCountriesByName', () => {
      const data = { countries: countries };
      const country = countries[0];

      nock('https://restcountries.eu/rest/v2')
        .get(`/name/${country.alpha3Code}`)
        .reply(200, data.countries);

      const expectedActions = [
        { type: ActionTypes.GET_COUNTRIES_START },

        {
          type: ActionTypes.GET_COUNTRIES_SUCCESS,
          payload: { countries: data.countries, withFilter: true }
        },
        { type: ActionTypes.GET_COUNTRIES_END }
      ];

      const store = mockStore(initialState);

      store.dispatch(actions.getCountriesByName(country.alpha3Code)).then(() => {
        expect(store.getActions()).toStrictEqual(expectedActions);
      });
    });
    it('getCountriesByName with no country id', () => {
      const data = { countries: countries };

      nock('https://restcountries.eu/rest/v2')
        .get(`/all`)
        .reply(200, data.countries);

      const expectedActions = [
        { type: ActionTypes.GET_COUNTRIES_START },

        {
          type: ActionTypes.GET_COUNTRIES_SUCCESS,
          payload: { countries: data.countries, withFilter: false }
        },
        { type: ActionTypes.GET_COUNTRIES_END }
      ];

      const store = mockStore(initialState);

      store.dispatch(actions.getCountriesByName('')).then(() => {
        expect(store.getActions()).toStrictEqual(expectedActions);
      });
    });
  });
  describe('reducer', () => {
    it('should return default state for unknow action type', () => {
      expect(reducer(countriesInitialState, { type: 'UNKNOW' } as any)).toEqual(
        countriesInitialState
      );
    });

    it('should handle GET_COUNTRIES_START & return new state', () => {
      expect(
        reducer(countriesInitialState, {
          type: ActionTypes.GET_COUNTRIES_START
        })
      ).toEqual({
        ...countriesInitialState,
        loading: true
      });
    });
    it('should handle GET_COUNTRIES_END & return new state', () => {
      expect(
        reducer(countriesInitialState, {
          type: ActionTypes.GET_COUNTRIES_END
        })
      ).toEqual({
        ...countriesInitialState,
        loading: false
      });
    });
    it('should handle GET_COUNTRIES_SUCCESS & return new state', () => {
      const payload = { countries: countries, withFilter: false };
      expect(
        reducer(countriesInitialState, {
          type: ActionTypes.GET_COUNTRIES_SUCCESS,
          payload
        })
      ).toEqual({
        ...countriesInitialState,
        countries: payload.countries,
        error: false,
        countriesHasFilter: payload.withFilter
      });
    });
    it('should handle GET_COUNTRIES_SUCCESS & return new state', () => {
      expect(
        reducer(countriesInitialState, {
          type: ActionTypes.GET_COUNTRIES_FAIL
        })
      ).toEqual({
        ...countriesInitialState,
        error: true
      });
    });
  });
});
