import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UniCountrySelectComponent } from './components/country-select/country-select.component';
import { UniSelectedCountryComponent } from './components/selected-country/selected-country.component';
import { uniCovidReducers } from './store/covid.reducer';
import { UniCovidEffects } from './store/covid.effects';


const Declarations = [
  UniCountrySelectComponent,
  UniSelectedCountryComponent,
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,

    StoreModule.forFeature('covid', uniCovidReducers),
    EffectsModule.forFeature([UniCovidEffects]),
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class UniReportModule {
}
