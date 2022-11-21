import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UniAuthModule } from 'uni-auth';
import { UniReportModule } from 'uni-report';
import { UniBlockchainModule } from 'uni-blockchain';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { PageAuthComponent } from './auth/auth.component';
import { PageDashboardComponent } from './dashboard/dashboard.component';
import { PageCovidComponent } from './covid/covid.component';
import { PageBlockchainComponent } from './blockchain/blockchain.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: PageAuthComponent,
  },
  {
    path: 'app',
    component: PageDashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'app/covid',
    component: PageCovidComponent,
  },
  {
    path: 'app/blockchain',
    component: PageBlockchainComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    UniAuthModule,
    UniReportModule,
    UniBlockchainModule,
  ],
  declarations: [
    PageNotFoundComponent,
    PageAuthComponent,
    PageDashboardComponent,
    PageCovidComponent,
    PageBlockchainComponent
  ],
  providers: [
    AuthGuardService
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
