import { EntityState } from '@ngrx/entity/src/models';

import { Country } from './country.model';


export interface CovidState {
  countries: EntityState<Country>;
  ui: Partial<CovidUiState>;
}

export interface CovidUiState {
  selectedCountry: string;
}
