import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UniAuthService } from '../../services/auth.service';


@Component({
  selector: 'uni-login-menu',
  templateUrl: './login-menu.component.html',
})
export class UniLoginMenuComponent {

  constructor(
    private router: Router,
    private loginService: UniAuthService,
  ) {
  }

  loginGithub(): void {
    this.loginService.signInGithubWithPopup()
      .then((result) => {
        // The signed-in user info.
        this.router.navigate(['app']);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
