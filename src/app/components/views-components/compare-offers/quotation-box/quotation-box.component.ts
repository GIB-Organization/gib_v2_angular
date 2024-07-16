import { QuotationStoreQuery } from './../../../../store/quotationStore/quotation-store.query';
import { ChangeDetectionStrategy, Component, inject, input, model, OnInit, signal } from '@angular/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { CompanySpeedRateComponent } from '../company-speed-rate/company-speed-rate.component';
import { SettingsQuery } from '../../../../store/settings/settings.query';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { EQuotationsTabs } from '../../../../core/enums/quotations.enum';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { DropdownModule } from 'primeng/dropdown';
import { IBenefit, ICompanyQuotations, IQuotation, IQuotationProduct } from '../../../../models/quotation.interface';
import { CompaniesStoreQuery } from '../../../../store/companiesStore/companies-store.query';
import { ICompany } from '../../../../models/companies.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quotation-box',
  standalone: true,
  imports: [BaseImageComponentComponent, CompanySpeedRateComponent, TranslateModule, CurrencyPipe, BaseButtonComponentComponent, BaseLabelComponentComponent, DropdownModule, ReactiveFormsModule],
  templateUrl: './quotation-box.component.html',
  styleUrl: './quotation-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationBoxComponent implements OnInit{
  settingsQuery = inject(SettingsQuery);
  comprehensiveOrThird = model<EQuotationsTabs>(EQuotationsTabs.thirdParty);
  comprehensivePrice = input<number>();
  companiesStoreQuery = inject(CompaniesStoreQuery)
  quotationStoreQuery = inject(QuotationStoreQuery)
  quotation = input<IQuotation | any>()
  company = input<ICompany | any>()
  choosedProduct = signal<Partial<IQuotationProduct> | any>({});
  choosedBenefits:IBenefit[] = []

  get EQuotationsTabs(){
    return EQuotationsTabs;
  }

  ngOnInit(): void {
    this.choosedProduct.set(this.quotation()?.products[0]);
  }

  toggleBenefit(benefit:IBenefit, $event:any){
    let ckecked = $event.target.checked;
    let product = this.choosedProduct();
    if(ckecked){
      this.choosedBenefits.push(benefit);
      this.choosedProduct.set({...product, productPrice:product.productPrice + benefit.benefitPrice});
    }else{
      let index = this.choosedBenefits.findIndex(item=>{item.benefitId === benefit.benefitId});
      this.choosedBenefits.splice(index, 1);
      this.choosedProduct.set({...product, productPrice:product.productPrice - benefit.benefitPrice});
    }
  }

  changeProduct(product:IQuotationProduct){
    this.choosedProduct.set(product);
    this.choosedBenefits = [];
  }
}
