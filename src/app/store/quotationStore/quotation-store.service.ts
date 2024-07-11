import { Injectable, inject } from '@angular/core';
import { QuotationApiService } from '../../services/api/quotationApi/quotation-api.service';
import { QuotationStore } from './quotation-store.store';
import { take } from 'rxjs';
import { InsuranceInquireStoreQueryService } from '../insuranceInquireStore/insurance-inquire-store.query';
import { CompaniesStoreQuery } from '../companiesStore/companies-store.query';
import { ICompany } from '../../models/companies.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotationStoreService {
  private api = inject(QuotationApiService);
  private store = inject(QuotationStore);
  private insuranceInquireStoreQuery = inject(InsuranceInquireStoreQueryService);
  private companiesStoreQuery = inject(CompaniesStoreQuery);

  
  /**
   * @param  {ICompany} company
   */
  getQuote(company: ICompany){
    this.store.setLoading(true)
    this.api.getQuote(company.insuranceCompanyID??0,this.insuranceInquireStoreQuery.inquireResponse.refId??'').pipe(take(1)).subscribe({
      next: (res) => {
        let mappedQuotations={};
        res.forEach(item=>{
          mappedQuotations = {...mappedQuotations, [item.productTypeCode]:item}
        }) 
        this.store.update(state=>({
          quotations: [...state.quotations, {
            mappedQuotations:mappedQuotations,
            // quotations: res,
            company: {
              insuranceCompanyID: company.insuranceCompanyID,
              nameAr: company.nameAr,
              nameEn: company.nameEn,
            }
          }]
        }));
      },
      complete:() => this.store.setLoading(false),
      error:() => this.store.setLoading(false),
    });
  }

  getQuotes(){
    this.companiesStoreQuery.companies?.forEach(item=>{
      this.getQuote(item)
    })
  }

  resetStore(){
    this.store.reset()
  }
}
