import { inject, Injectable } from '@angular/core';
import { PaymentApiService } from '../../services/api/paymentApi/payment-api.service';
import { PaymentStore } from './payment-store.store';
import { take } from 'rxjs';
import { ICreateCheckoutDTO } from '../../models/checkout.interface';
import { Router } from '@angular/router';
import { ERoutes } from '../../core/enums';

@Injectable({
  providedIn: 'root',
})
export class PaymentStoreService {
  private api = inject(PaymentApiService);
  private store = inject(PaymentStore);
  private router = inject(Router);

  createCheckout(data:ICreateCheckoutDTO){
    this.store.setLoading(true)
    return this.api.createPaymentCheckout(data).pipe(take(1)).subscribe({
        next:(res)=>{
            console.log(res) 
            this.store.update({
              checkoutId:res
            })
            this.router.navigate([ERoutes.chechout])
        },
        complete:()=>{this.store.setLoading(false)},
        error:(err)=>{
          console.log(err)
          this.store.setLoading(false)
        }
    })
  }
  getPaymentStatus(id:string){
    this.store.setLoading(true)
    return this.api.getPaymentStatus(id).pipe(take(1)).subscribe({
        next:(res)=>{
            console.log(res) 
            this.store.update({
              checkoutStatus:res
            })
        },
        complete:()=>{this.store.setLoading(false)},
        error:(err)=>{
          console.log(err)
          this.store.setLoading(false)
        }
    })
  }
}
