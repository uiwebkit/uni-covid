import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { errorHandler, UniRestApiService } from 'uni-common';

import { Country } from '../models/interfaces/country.model';
import { LOAD_COUNTRIES, setCountries } from './covid.actions';


@Injectable({ providedIn: 'root' })
export class UniCovidEffects {

  constructor(
    private action$: Actions,
    private restService: UniRestApiService,
  ) {
  }

  loadCountries$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_COUNTRIES),
      switchMap((): Observable<Country[]> => this.restService.get('countriesUrl')),
      errorHandler('LOAD_COUNTRIES'),
      map((payload: Country[]): Action => setCountries({ payload })),
    ),
  );
}
