import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, of, combineLatestWith, takeUntil } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryGroup } from '../../models/interfaces/country-group.model';
import { Country } from '../../models/interfaces/country.model';
import { UniCountrySelectService } from './country-select.service';
import { RxUnsubscribe } from 'uni-common';


@Component({
  selector: 'uni-covid-country-select',
  templateUrl: './country-select.component.html',
})
export class UniCountrySelectComponent extends RxUnsubscribe implements OnInit {

  countryForm: FormGroup = this.formBuilder.group({
    country: '',
  });

  countryGroups$: Observable<CountryGroup[]> = of([]);

  constructor(
    private formBuilder: FormBuilder,
    private countrySelectService: UniCountrySelectService,
  ) {
    super();
  }

  ngOnInit() {
    // Upload countries list from the file
    this.countrySelectService.loadCountries();

    this.countryGroups$ = this.countryForm.get('country')!.valueChanges
      .pipe(
        startWith(''),
        combineLatestWith(this.countrySelectService.getCountryGroups()),
        map(([value, countryGroups]: [string, CountryGroup[]]) => {
          // filter continents and countries if country does not include specified value and hide empty continents
          return this.countrySelectService.filterCountryGroups(value, countryGroups);
        }),
      );

    // Filter the entered value if it is not present into provided countries list
    this.countryForm.get('country')!.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        combineLatestWith(this.countrySelectService.getCountries()),
      )
      .subscribe(([value, countries]: [string, Country[]]) => {
        const isPresent = countries.filter((country: Country): boolean => country.country === value).length > 0;
        const selectedCountry = isPresent ? value : '';

        this.countrySelectService.setSelectedCountry(selectedCountry);

        return selectedCountry;
      });
  }
}
