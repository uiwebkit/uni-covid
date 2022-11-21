import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UniObject } from 'uni-common';

import { CountryGroup } from '../../models/interfaces/country-group.model';
import { Country } from '../../models/interfaces/country.model';
import { UniCovidStoreService } from '../../store/covid-store.service';
import { mapCountryGroups } from '../../utils/map-country-groups';
import { Continents } from '../../utils/continents';
import { searchValue } from '../../utils/search-value';


@Injectable({ providedIn: 'root' })
export class UniCountrySelectService {

  constructor(private storeService: UniCovidStoreService) {
  }

  loadCountries(): void {
    this.storeService.loadCountries();
  }

  getCountries(): Observable<Country[]> {
    return this.storeService.getCountries();
  }

  getCountryGroups(): Observable<CountryGroup[]> {
    return this.storeService.getCountryGroups()
      .pipe(
        map((countries: UniObject<string[]>): CountryGroup[] => mapCountryGroups(Continents, countries)),
      );
  }

  filterCountryGroups(value: string, groups: CountryGroup[]): CountryGroup[] {
    return value
      ? groups
        .map((group) => ({
          continent: group.continent,
          countries: searchValue(group.countries, value),
        }))
        .filter(group => group.countries.length > 0)
      : groups;
  }

  setSelectedCountry(payload: string): void {
    this.storeService.setSelectedCountry(payload);
  }
}
