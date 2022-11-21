import { createAction, props } from "@ngrx/store";

import { Country } from '../models/interfaces/country.model';


export const LOAD_COUNTRIES = "[Countries] Load";
export const SET_COUNTRIES = "[Countries] Set";
export const SET_SELECTED_COUNTRY = "[Countries] Set Selected";


export const loadCountries = createAction(LOAD_COUNTRIES);
export const setCountries = createAction(SET_COUNTRIES, props<{ payload: Country[] }>());
export const setSelectedCountry = createAction(SET_SELECTED_COUNTRY, props<{ payload: string }>());
