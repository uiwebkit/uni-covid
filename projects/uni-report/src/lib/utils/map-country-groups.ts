import { UniObject } from 'uni-common';

import { CountryGroup } from '../models/interfaces/country-group.model';

export function mapCountryGroups(continents: string[], countries: UniObject<string[]>) {
  return continents.map((continent: string): CountryGroup => ({
    continent,
    countries: countries[continent],
  }));
}
