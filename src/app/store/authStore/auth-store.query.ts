import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IAuthStore } from './auth-store.interface';
import { AuthStore } from './auth-store.store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreQuery extends Query<IAuthStore> {

  constructor(private _store: AuthStore) { 
    super(_store)
  }

  get user(){
    return this._store.getValue().authData
  }
  get userId(){
    return this._store.getValue().authData?.userId
  }
  get bankName(){
    return this._store.getValue().authData?.bankName??''
  }
  get email(){
    return this._store.getValue().authData?.email??''
  }
  get phoneNumber(){
    return this._store.getValue().authData?.phoneNumber??''
  }
  get iban(){
    return this._store.getValue().authData?.iban??''
  }
  get userName(){
    return this._store.getValue().authData?.username
  }
  get fullName(){
    return this._store.getValue().authData?.fullName
  }
  get nationalId(){
    return this._store.getValue().authData?.nationalId
  }
  get token(){
    return this._store.getValue().authData?.token
  }

  get isAuthenticated(){
    return !!this.token
  }
  get isAuthenticated$(){
    return this.select(state=> state.authData?.token);
  }

}
