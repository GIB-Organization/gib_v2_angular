import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../core/injection-tokens/base-url.token';
import { IInsuranceInquireDTO, IInsuranceInquireResponse } from '../../../models/insuranceInquire.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAdditionalData } from '../../../models/additionalData.interface';

@Injectable({
  providedIn: 'root'
})
export class InsuranceInquireApiService {

  private baseUrl = inject(BASE_URL_TOKEN);
  private path = 'basicInfo'
  private http = inject(HttpClient)
  /**
   * @param  {IInsuranceInquireDTO} data
   * @returns Observable
   */
  inquireInsurance(data: IInsuranceInquireDTO): Observable<IInsuranceInquireResponse>{
    return this.http.post<IInsuranceInquireResponse>(`${this.baseUrl}/${this.path}/inquire`, data)
  }

  postAdditionalData(data:IAdditionalData):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/${this.path}/additionalData`, data)
  }
}
