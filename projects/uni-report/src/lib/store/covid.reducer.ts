import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { CovidState } from '../models/interfaces/covid-state.model';
import { uniCountriesAdapter } from './covid.adapters';
import { setCountries, setSelectedCountry } from './covid.actions';


const countriesReducer = createReducer(
  uniCountriesAdapter.getInitialState(),
  on(setCountries, (state, { payload }) => uniCountriesAdapter.setMany(payload, { ids: [], entities: {} })),
);

const uiReducer = createReducer(
  {},
  on(setSelectedCountry, (state, { payload }) => ({ ...state, selectedCountry: payload })),
);

export const uniCovidReducers: ActionReducerMap<CovidState> = {
  countries: countriesReducer,
  ui: uiReducer
};
