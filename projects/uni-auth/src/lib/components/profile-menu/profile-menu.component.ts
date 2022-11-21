import { Component, Input } from '@angular/core';
import { User } from 'firebase/auth';

import { UniAuthService } from '../../services/auth.service';


@Component({
  selector: 'uni-profile-menu',
  templateUrl: './profile-menu.component.html',
})
export class UniProfileMenuComponent {

  @Input()
  user: User | null = null;

  constructor(
    private loginService: UniAuthService,
  ) {
  }

  logout(): void {
    this.loginService.logout()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
      // An error happened.
    });
  }
}
