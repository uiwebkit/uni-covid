import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatButtonModule } from '@angular/material/button';

import { UniCommonModule } from 'uni-common';

import { uniBlockchainReducers } from './store/blockchain.reducer';
import { UniBlockchainEffects } from './store/blockchain.effects';
import { UniBlockchainStoreService } from './store/blockchain-store.service';
import { UniBlocksComponent } from './components/blocks/blocks.component';
import { UniBlocksService } from './components/blocks/blocks.service';
import { UniTransactionsComponent } from './components/transactions/transactions.component';
import { UniTransactionsService } from './components/transactions/transactions.service';
import { UniLoginService } from './components/login/login.service';
import { UniLoginComponent } from './components/login/login.component';


const Declarations = [
  UniLoginComponent,
  UniBlocksComponent,
  UniTransactionsComponent,
];


@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

    MatButtonModule,

    StoreModule.forFeature('blockchain', uniBlockchainReducers),
    EffectsModule.forFeature([UniBlockchainEffects]),

    UniCommonModule,
  ],
  declarations: Declarations,
  providers: [
    UniLoginService,
    UniBlocksService,
    UniTransactionsService,
    UniBlockchainStoreService,
  ],
  exports: Declarations,
})
export class UniBlockchainModule {
}
