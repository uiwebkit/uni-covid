import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/** Initialize Firebase
 Use native 'firebase' because '@angular/fire' has:
 1. very poor support and bug fixes;
 2. very bad documentation;
 3. very rare updates;
 */
initializeApp(environment.firebaseConfig);


// Use for debugging API (from mocks)
// window.localStorage.setItem('debug', 'true');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
