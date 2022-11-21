import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UniObject, UniWindowRefService } from 'uni-common';

import { ModifiedBlock } from '../../models/interfaces/block.model';
import { BlocksApiParams } from '../../models/interfaces/blocks-api-params.model';
import { UniBlockchainStoreService } from '../../store/blockchain-store.service';


@Injectable({ providedIn: 'root' })
export class UniBlocksService {

  constructor(
    private router: Router,
    private windowRef: UniWindowRefService,
    private storeService: UniBlockchainStoreService,
  ) {
  }

  loadBlocksCount(): void {
    this.storeService.loadBlocksCount();
  }

  loadBlocks(payload: BlocksApiParams): void {
    this.storeService.loadBlocks(payload);
  }

  getBlocksCount(): Observable<number> {
    return this.storeService.getBlocksCount();
  }

  getBlocks(): Observable<ModifiedBlock[]> {
    return this.storeService.getBlocks();
  }

  setSelectedBlock(payload: number): void {
    this.storeService.setSelectedBlock(payload);
  }

  setQueryParams(queryParams: UniObject<number | undefined>): void {
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }

  get queryParams(): string {
    return this.windowRef.nativeWindow.location.search;
  }
}
