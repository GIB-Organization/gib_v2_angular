import { inject, Injectable } from '@angular/core';
import { IQuotationStore } from './quotation-store.interface';
import { Query } from '@datorama/akita';
import { QuotationStore } from './quotation-store.store';
import { LanguageService } from '../../services/language/language.service';
import { ISelectedQuotation } from '../../models/quotation.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotationStoreQuery extends Query<IQuotationStore>{
  translate = inject(LanguageService);
  constructor(private _store : QuotationStore) { super(_store) }

  get quotations(){
    return this._store.getValue().quotations
  }
  get selectedQuotationData(){
    return this._store.getValue().selectedQuotationData
  }
  setSelectedQuotationData(data:ISelectedQuotation){
    this._store.update({selectedQuotationData:data})
  }
  get quotations$(){
    return this.select('quotations')
  }
  get productNameKey(): 'productNameAr'|'productNameEn'{
    return this.translate.handleBackendLocalKeys('productName')
  }
  get productDescKey(): 'productDescAr'|'productDescEn'{
    return this.translate.handleBackendLocalKeys('productDesc')
  }
  get benefitNameKey(): 'benefitNameAr'|'benefitNameEn'{
    return this.translate.handleBackendLocalKeys('benefitName')
  }

}
