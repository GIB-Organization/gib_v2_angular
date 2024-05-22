import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ILookupStore } from './lookups-store.interface';

const initValue = ()=>{
  return {}
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'LookupsStore', resettable: true })
export class LookupsStore extends Store<ILookupStore> {
  constructor() {
    super(initValue())
   }
}
