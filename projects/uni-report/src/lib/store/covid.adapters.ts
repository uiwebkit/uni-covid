import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

import { Country } from '../models/interfaces/country.model';


export const uniCountriesAdapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: (country: Country): string => country.country,
});
