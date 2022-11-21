import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UniAuthModule } from 'uni-auth';

import { UniHeaderComponent } from './header/header.component';


const Declarations = [
  UniHeaderComponent,
];


@NgModule({
  imports: [
    RouterModule,
    MatToolbarModule,

    UniAuthModule
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class UniHeaderModule {
}
