import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../core/injection-tokens/base-url.token';
import { IInsuranceInquireDTO, IInsuranceInquireResponse } from '../../../models/insuranceInquire.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceInquireApiService {

  private baseUrl = inject(BASE_URL_TOKEN);
  private path = 'basicInfo/inquire'
  private http = inject(HttpClient)

  inquireInsurance(data: IInsuranceInquireDTO): Observable<IInsuranceInquireResponse>{
    return this.http.post<IInsuranceInquireResponse>(`${this.baseUrl}/${this.path}`, data)
  }
}
