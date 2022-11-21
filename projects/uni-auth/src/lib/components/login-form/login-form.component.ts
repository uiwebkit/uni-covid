import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UniAuthService } from '../../services/auth.service';


@Component({
  selector: 'uni-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class UniLoginFormComponent {

  constructor(
    private router: Router,
    private loginService: UniAuthService,
  ) {
  }

  async loginGithub(): Promise<void> {
    await this.loginService.signInGithubWithPopup()
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
