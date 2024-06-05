import { Injectable, inject } from '@angular/core';
import { InsuranceInquireApiService } from '../../services/api/insuranceInquireApi/insurance-inquire-api.service';
import { IInsuranceInquireDTO } from '../../models/insuranceInquire.interface';
import { InsuranceInquireStoreStoreService } from './insurance-inquire-store.store';
import { Router } from '@angular/router';
import { ERoutes } from '../../core/enums';
import { take } from 'rxjs';
import { IAdditionalData } from '../../models/additionalData.interface';

@Injectable({
  providedIn: 'root'
})
export class InsuranceInquireStoreService {
  private api = inject(InsuranceInquireApiService);
  private store = inject(InsuranceInquireStoreStoreService);
  private router = inject(Router);
  /**
   * @param  {IInsuranceInquireDTO} data
   */
  inquireInsurance(data:IInsuranceInquireDTO){
    this.store.setLoading(true)
    this.api.inquireInsurance(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update({inquireResponse: res});
        this.router.navigate([`${ERoutes.insuranceShow}/${ERoutes.additionalData}`]);
      },
      complete:() => this.store.setLoading(false),
      error:() => this.store.setLoading(false),
    });
  }
  /**
   * @param  {IAdditionalData} data
   */
  additionalDataPost(data:IAdditionalData){
    this.store.setLoading(true)
    this.api.postAdditionalData(data).pipe(take(1)).subscribe({
      next: (res) => {
        // this.store.update({inquireResponse: res});
        this.router.navigate([`${ERoutes.insuranceShow}/${ERoutes.compareOffers}`]);
      },
      complete:() => this.store.setLoading(false),
      error:() => this.store.setLoading(false),
    });
  }
}
