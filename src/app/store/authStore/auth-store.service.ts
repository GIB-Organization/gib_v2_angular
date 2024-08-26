import { Injectable, inject } from '@angular/core';
import { AuthApiService } from '../../services/api/authApi/auth-api.service';
import { AuthStore } from './auth-store.store';
import { ILoginDTO, ILoginOtp, IRefreshTokenDTO, IRegisterDTO, IRegisterOtp } from '../../models/auth.interface';
import { take } from 'rxjs';
import { AuthDialogService } from '../../services/auth/auth-dialog.service';
import { EFormType, EOtpType, ERoutes } from '../../core/enums';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToasterService } from '../../services/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private api = inject(AuthApiService);
  private store = inject(AuthStore);
  private authDialogService = inject(AuthDialogService);
  private authService = inject(AuthService);
  private toasterService = inject(ToasterService);
  private router = inject(Router);

  getUserFromLocal() {
    this.store.update({
      authData: this.authService.getUserFromLocal()
    })
  }
  logout(){
    this.store.reset();
    this.authService.logout();
  }
  login(data: ILoginDTO) {
    this.store.setLoading(true)
    this.api.login(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.authDialogService.visible.set(false)
        this.store.update({ authData: res });
        this.toasterService.addSuccess('public.successProccess')
        this.authService.saveUserToLocal(res);
      },
      complete: () => this.store.setLoading(false),
      error: (err) => {
        this.store.setError(err.error)
        this.toasterService.addError(err.error)
        this.store.setLoading(false)
      }
    });
  }
  register(data: IRegisterDTO) {
    this.store.setLoading(true)
    this.api.register(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update({ authData: res });
        this.authService.saveUserToLocal(res);
        this.toasterService.addSuccess('public.successProccess')
        this.authDialogService.visible.set(false)
        this.router.navigate([`/${ERoutes.profile}`]);
      },
      complete: () => this.store.setLoading(false),
      error: (err) => {
        this.store.setError(err.error)
        this.toasterService.addError(err.error)
        this.store.setLoading(false)
      }
    });
  }
  sendRegisterOtp(data: IRegisterOtp) {
    this.store.setLoading(true)
    this.api.sendRegisterOtp(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.authDialogService.otpDialogType = EOtpType.register;
        this.authDialogService.openComponent(EFormType.otp);
        this.store.update({ otp: res });
      },
      complete: () => this.store.setLoading(false),
      error: (err) => {
        this.toasterService.addError(err.error)
        this.store.setError(err.error)
        this.store.setLoading(false)
      }
    });
  }
  sendLoginOtp(data: ILoginOtp) {
    this.store.setLoading(true)
    this.api.sendLoginOtp(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.authDialogService.otpDialogType = EOtpType.login;
        this.authDialogService.openComponent(EFormType.otp);
        this.store.update({ otp: res });
      },
      complete: () => this.store.setLoading(false),
      error: (err) => {
        this.toasterService.addError(err.error)
        this.store.setError(err.error)
        this.store.setLoading(false)
      }
    });
  }
  refreshToken(data: IRefreshTokenDTO) {
    this.store.setLoading(true)
    this.api.refreshToken(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update(state => ({
          authData: {
            ...state.authData,
            token: res
          }
        }));
      },
      complete: () => this.store.setLoading(false),
      error: (err) => {
        this.store.setError(err)
        this.store.setLoading(false)
      }
    });
  }
}
