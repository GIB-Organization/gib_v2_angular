import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ILookupStore } from './lookups-store.interface';
import { LookupsStore } from './lookups-store.store';

@Injectable({
  providedIn: 'root'
})
export class LookupsStoreQuery extends Query<ILookupStore> {

  constructor(private _store:LookupsStore) { 
    super(_store)
  }
  get lookups(){
    return this.getValue();
  }
}
