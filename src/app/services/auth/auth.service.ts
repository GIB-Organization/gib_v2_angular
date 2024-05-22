import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../core/localStorage/local-storage.service';
import { EStorageEnum } from '../../core/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #localstorage = inject(LocalStorageService);

  isAuthenticated(): boolean{
    return !!this.#localstorage.getStorageElement(EStorageEnum.token)
  }

  getToken():string{
    return this.#localstorage.getStorageElement(EStorageEnum.token)??'';
  }
}
