import { inject, Injectable } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../core/injection-tokens/base-url.token';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateCheckoutDTO } from '../../../models/checkout.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {
  private baseUrl = inject(BASE_URL_TOKEN);
  private path = 'payment'
  private http = inject(HttpClient)

  createPaymentCheckout(data:ICreateCheckoutDTO): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/${this.path}/createCheckout`, data)
  }

  getPaymentStatus(requestId:string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.path}/GetPaymentStatus?requestId=${requestId}`)
  }
}
