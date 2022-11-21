import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UniSelectedCountryService } from './selected-country.service';


@Component({
  selector: 'uni-covid-selected-country',
  template: `
    <h3>
      Selected country: {{ selectedCountry$ | async }}
    </h3>
  `,
})
export class UniSelectedCountryComponent implements OnInit {

  selectedCountry$: Observable<string> = of('');

  constructor(
    private selectedCountryService: UniSelectedCountryService,
  ) {
  }

  ngOnInit(): void {
    this.selectedCountry$ = this.selectedCountryService.getSelectedCountry();
  }
}
