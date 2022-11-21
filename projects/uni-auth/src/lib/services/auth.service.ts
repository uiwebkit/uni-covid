import { Injectable } from '@angular/core';
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { Auth, UserCredential } from '@firebase/auth';
import { Observable, Observer } from 'rxjs';

import { UniLocalStorageService } from 'uni-common';


@Injectable({ providedIn: 'root' })
export class UniAuthService {

  constructor(
    private localStorageService: UniLocalStorageService,
  ) {
  }

  get userChanged$(): Observable<User | null> {
    return new Observable((observer: Observer<User | null>) => {
      return onAuthStateChanged(
        this.auth,
        user => observer.next(user),
        err => observer.error(err),
        () => observer.complete(),
      );
    });
  }

  get auth(): Auth {
    return getAuth();
  }

  get user(): User | null {
    return <User | null>this.localStorageService.getItem('user');
  }

  set user(user: User | null) {
    this.localStorageService.setItem('user', user);
  }

  signInGithubWithPopup(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
