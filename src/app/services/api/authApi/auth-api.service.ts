import { Injectable, inject } from '@angular/core';
import { BASE_URL_TOKEN } from '../../../core/injection-tokens/base-url.token';
import { HttpClient } from '@angular/common/http';
import { IChangeInfo, IChangePassword, ILoginDTO, ILoginOtp, ILoginResponse, IRefreshTokenDTO, IRegisterDTO, IRegisterOtp } from '../../../models/auth.interface';
import { Observable } from 'rxjs';
import { IResponse } from '../../../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private baseUrl = inject(BASE_URL_TOKEN);
  private path = 'account'
  public refreshPath = 'refreshToken'
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
    return this.http.post<ILoginResponse>(`${this.baseUrl}/${this.path}/register`, data)
  }
  /**
   * @param  {IRefreshTokenDTO} data
   * @returns Observable
   */
  refreshToken(data:IRefreshTokenDTO | null): Observable<IRefreshTokenDTO>{
    return this.http.post<IRefreshTokenDTO>(`${this.baseUrl}/${this.path}/${this.refreshPath}`, data)
  }

  sendRegisterOtp(data:IRegisterOtp): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/${this.path}/sendRegisterOtp`, data)
  }

  sendLoginOtp(data:ILoginOtp): Observable<string>{
    return this.http.post<string>(`${this.baseUrl}/${this.path}/sendLoginOtp`, data)
  }

  changeInfo(data:IChangeInfo): Observable<IResponse<ILoginResponse>>{
    return this.http.post<IResponse<ILoginResponse>>(`${this.baseUrl}/${this.path}/changeInfo`, data)
  }
  
  changePassword(data:IChangePassword): Observable<IResponse<null>>{
    return this.http.post<IResponse<null>>(`${this.baseUrl}/${this.path}/changePassword`, data)
  }
}
