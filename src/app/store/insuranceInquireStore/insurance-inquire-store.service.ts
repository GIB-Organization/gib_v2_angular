import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { InsuranceInquireApiService } from '../../services/api/insuranceInquireApi/insurance-inquire-api.service';
import { IInsuranceInquireDTO } from '../../models/insuranceInquire.interface';
import { InsuranceInquireStoreStoreService } from './insurance-inquire-store.store';
import { Router } from '@angular/router';
import { ERoutes } from '../../core/enums';

@Injectable({
  providedIn: 'root'
})
export class InsuranceInquireStoreService {
  private api = inject(InsuranceInquireApiService);
  private store = inject(InsuranceInquireStoreStoreService);
  private router = inject(Router);
  /**
   * @param  {IInsuranceInquireDTO} data
   * @param  {DestroyRef} destroyRef
   */
  inquireInsurance(data:IInsuranceInquireDTO,destroyRef:DestroyRef){
    this.store.setLoading(true)
    this.api.inquireInsurance(data).pipe(takeUntilDestroyed(destroyRef)).subscribe({
      next: (res) => {
        this.store.update({inquireResponse: res});
        this.router.navigate([`${ERoutes.insuranceShow}/${ERoutes.additionalData}`]);
      },
      complete:() => this.store.setLoading(false),
      error:(err) => this.store.setLoading(false),
    });
  }
}
