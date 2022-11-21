import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UniLocalStorageService } from 'uni-common';


@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: UniLocalStorageService
  ) {
  }

  canActivate(): boolean {
    const user = this.localStorageService.getItem('user');

    if (!user) {
      this.router.navigate(['auth']);
    }

    return !!user;
  }
}
