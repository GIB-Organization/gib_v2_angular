import { Injectable, inject } from '@angular/core';
import { AuthApiService } from '../../services/api/authApi/auth-api.service';
import { AuthStore } from './auth-store.store';
import { ILoginDTO, IRefreshTokenDTO, IRegisterDTO } from '../../models/auth.interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private api = inject(AuthApiService);
  private store = inject(AuthStore);
  
  login(data:ILoginDTO){
    this.store.setLoading(true)
    this.api.login(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update({authData: res});
      },
      complete:() => this.store.setLoading(false),
    });
  }
  register(data:IRegisterDTO){
    this.store.setLoading(true)
    this.api.register(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update({authData: res});
      },
      complete:() => this.store.setLoading(false),
    });
  }
  refreshToken(data:IRefreshTokenDTO){
    this.store.setLoading(true)
    this.api.refreshToken(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.store.update(state=>({
          authData:{
            ...state.authData,
            token: res
          }
        }));
      },
      complete:() => this.store.setLoading(false),
    });
  }
}
