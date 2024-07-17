import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../core/injection-tokens/base-url.token';
import { HttpClient } from '@angular/common/http';
import { ILoginDTO, ILoginResponse, IRefreshTokenDTO, IRegisterDTO } from '../../../models/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private baseUrl = inject(BASE_URL_TOKEN);
  private path = 'account'
  private http = inject(HttpClient)
  /**
   * @param  {ILoginDTO} data
   * @returns Observable
   */
  login(data:ILoginDTO): Observable<ILoginResponse>{
    return this.http.post<ILoginResponse>(`${this.baseUrl}/${this.path}/login`, data)
  }
  /**
   * @param  {IRegisterDTO} data
   * @returns Observable
   */
  register(data:IRegisterDTO): Observable<ILoginResponse>{
    return this.http.post<ILoginResponse>(`${this.baseUrl}/${this.path}/login`, data)
  }
  /**
   * @param  {IRefreshTokenDTO} data
   * @returns Observable
   */
  refreshToken(data:IRefreshTokenDTO): Observable<IRefreshTokenDTO>{
    return this.http.post<IRefreshTokenDTO>(`${this.baseUrl}/${this.path}/refreshToken`, data)
  }

  sendOtp(data:Partial<IRegisterDTO>): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/${this.path}/sendOtp`, data)
  }
}
