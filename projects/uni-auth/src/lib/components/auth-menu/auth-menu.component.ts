import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { takeUntil } from 'rxjs';

import { RxUnsubscribe } from 'uni-common';

import { UniAuthService } from '../../services/auth.service';


@Component({
  selector: 'uni-auth-menu',
  templateUrl: './auth-menu.component.html',
})
export class UniAuthMenuComponent extends RxUnsubscribe implements OnInit {

  user: User | null;

  constructor(
    private router: Router,
    private loginService: UniAuthService,
  ) {
    super();
    this.user = this.loginService.user;
  }

  ngOnInit(): void {
    this.loginService.userChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.user = user;
          this.loginService.user = user;
        } else {
          // User is signed out
          this.user = null;
          this.loginService.user = null;
          this.router.navigate(['auth']);
        }
      });
  }
}
