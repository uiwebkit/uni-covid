import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity/src/models';

import { UniObject } from 'uni-common';

import { CovidState, CovidUiState } from '../models/interfaces/covid-state.model';
import { Country } from '../models/interfaces/country.model';
import { uniCountriesAdapter } from './covid.adapters';


const covidState = createFeatureSelector('covid') as MemoizedSelector<CovidState, CovidState>;
const countriesState = createSelector(covidState, (state: CovidState): EntityState<Country> => state.countries);


export const { selectAll: selectCountries } = uniCountriesAdapter.getSelectors(countriesState);
export const { selectIds: selectCountriesIds } = uniCountriesAdapter.getSelectors(countriesState);

export const selectCountryGroups = createSelector(
  selectCountries,
  (countries: Country[]): UniObject<string[]> => countries
    .reduce((accum: UniObject<string[]>, country: Country) => ({
      ...accum,
      [country.continent]: [
        ...(accum[country.continent] || []),
        country.country,
      ],
    }), {}),
);

const uiState = createSelector(covidState, (state: CovidState): Partial<CovidUiState> => state.ui);

export const selectCountry = createSelector(
  uiState,
  (state: Partial<CovidUiState>): string => state.selectedCountry || ''
);
