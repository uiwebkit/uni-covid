import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UniCovidStoreService } from '../../store/covid-store.service';


@Injectable({ providedIn: 'root' })
export class UniSelectedCountryService {

  constructor(private storeService: UniCovidStoreService) {
  }

  getSelectedCountry(): Observable<string> {
    return this.storeService.getSelectedCountry();
  }
}
