import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { IAuthStore } from './auth-store.interface';
import { AuthStore } from './auth-store.store';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreQuery extends Query<IAuthStore> {

  constructor(private _store: AuthStore) { 
    super(_store)
  }

  get userId(){
    return this._store.getValue().authData?.userId
  }
  get userName(){
    return this._store.getValue().authData?.username
  }
  get token(){
    return this._store.getValue().authData?.token
  }

  get isAuthenticated(){
    return !!this.token
  }

}
