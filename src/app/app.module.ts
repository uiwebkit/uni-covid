import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UniHeaderModule } from 'uni-header';

import { apiRoutes } from './api-routes';
import { AppRoutingModule } from './pages/app-routing.module';
import { AppComponent } from './bootstrap/app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot({}, { metaReducers: [] }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !localStorage.getItem('debug') }),

    UniHeaderModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent], // in one line, because always will be only one item
  providers: [
    // different api routes for production and debugging
    { provide: 'uniRoutesServiceModel', useValue: apiRoutes }
  ],
  bootstrap: [AppComponent], // in one line, because always will be only one item
})
export class AppModule {
}
