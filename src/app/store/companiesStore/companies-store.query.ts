import { Injectable, inject } from '@angular/core';
import { Query } from '@datorama/akita';
import { ICompaniesStore } from './companies-store.interface';
import { CompaniesStore } from './companies-store.store';
import { LanguageService } from '../../services/language/language.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesStoreQuery extends Query<ICompaniesStore> {
  translate = inject(LanguageService);
  constructor(private _store : CompaniesStore) { super(_store) }

  get companies(){
    return this._store.getValue().companies;
  }
  get companyNameKey(){
    return this.translate.handleBackendLocalKeys('name')
  }
  get companyDescKey(){
    return this.translate.handleBackendLocalKeys('desc')
  }
}
