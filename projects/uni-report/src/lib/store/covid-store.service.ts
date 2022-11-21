import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UniObject } from 'uni-common';

import { CovidState } from '../models/interfaces/covid-state.model';
import { Country } from '../models/interfaces/country.model';
import { loadCountries, setSelectedCountry } from './covid.actions';
import { selectCountries, selectCountry, selectCountryGroups } from './covid.selectors';


@Injectable({ providedIn: 'root' })
export class UniCovidStoreService {

  constructor(private store$: Store<CovidState>) {
  }

  loadCountries(): void {
    this.store$.dispatch(loadCountries());
  }

  setSelectedCountry(payload: string): void {
    this.store$.dispatch(setSelectedCountry({ payload }));
  }

  getCountries(): Observable<Country[]> {
    return this.store$.pipe(select(selectCountries));
  }

  getCountryGroups(): Observable<UniObject<string[]>> {
    return this.store$.pipe(select(selectCountryGroups));
  }

  getSelectedCountry(): Observable<string> {
    return this.store$.pipe(select(selectCountry));
  }
}
