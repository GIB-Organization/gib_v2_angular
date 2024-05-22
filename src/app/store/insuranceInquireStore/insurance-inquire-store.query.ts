import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { InsuranceInquireStoreStoreService } from './insurance-inquire-store.store';
import { IInsuranceInquireStore } from './insurance-inquire-store.interface';

@Injectable({
  providedIn: 'root'
})
export class InsuranceInquireStoreQueryService extends Query<IInsuranceInquireStore> {

  constructor(private _store: InsuranceInquireStoreStoreService) { 
    super(_store)
  }

  get inquireResponse(){
    return this.getValue().inquireResponse;
  }
}
