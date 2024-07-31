import { Injectable } from '@angular/core';
import { IPaymentStore } from './payment-store.interface';
import { PaymentStore } from './payment-store.store';
import { Query } from '@datorama/akita';
@Injectable({
  providedIn: 'root'
})
export class PaymentStoreQuery extends Query<IPaymentStore>{

  constructor(private _store: PaymentStore) { 
    super(_store)
  }

  get checkoutId(){
    return this._store.getValue().checkoutId
  }
  get checkoutStatus(){
    return this._store.getValue().checkoutStatus
  }
}
