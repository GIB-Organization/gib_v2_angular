import { inject, Injectable } from '@angular/core';
import { IQuotationStore } from './quotation-store.interface';
import { Query } from '@datorama/akita';
import { QuotationStore } from './quotation-store.store';
import { LanguageService } from '../../services/language/language.service';

@Injectable({
  providedIn: 'root'
})
export class QuotationStoreQuery extends Query<IQuotationStore>{
  translate = inject(LanguageService);
  constructor(private _store : QuotationStore) { super(_store) }

  get quotations(){
    return this._store.getValue().quotations
  }

  get quotations$(){
    return this.select('quotations')
  }
  get productNameKey(){
    return this.translate.handleBackendLocalKeys('productName')
  }
  get productDescKey(){
    return this.translate.handleBackendLocalKeys('productDesc')
  }
  get benefitNameKey(){
    return this.translate.handleBackendLocalKeys('benefitName')
  }

}
