import { Injectable, inject } from '@angular/core';
import { Query } from '@datorama/akita';
import { ILookupStore } from './lookups-store.interface';
import { LookupsStore } from './lookups-store.store';
import { LanguageService } from '../../services/language/language.service';

@Injectable({
  providedIn: 'root'
})
export class LookupsStoreQuery extends Query<ILookupStore> {
  translate = inject(LanguageService);
  defaultLookups$ = this.select('defaultLookups');
  get lookups(){
    return this.getValue().lookups??{};
  }
  get defaultLookups(){
    return this.getValue().defaultLookups;
  }
  get lookupNameKey(){
    return `${this.translate.handleBackendLocalKeys('name')}`
  }

  constructor(private _store:LookupsStore) { 
    super(_store)
  }
}
