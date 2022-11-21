import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UniLoginFormComponent } from './components/login-form/login-form.component';
import { UniAuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { UniLoginMenuComponent } from './components/login-menu/login-menu.component';
import { UniProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { UniAuthService } from './services/auth.service';


const Declarations = [
  UniLoginFormComponent,
  UniAuthMenuComponent,
  UniLoginMenuComponent,
  UniProfileMenuComponent
];


@NgModule({
  imports: [
    CommonModule,

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // easy use web components icons
  declarations: Declarations,
  providers: [
    UniAuthService,
  ],
  exports: Declarations,
})
export class UniAuthModule {
}
