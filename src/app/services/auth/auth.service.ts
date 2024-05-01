import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from '../core/localStorage/local-storage.service';
import { StorageEnum } from '../../core/enums/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #localstorage = inject(LocalStorageService);

  isAuthenticated(): boolean{
    return !!this.#localstorage.getStorageElement(StorageEnum.token)
  }

  getToken():string{
    return this.#localstorage.getStorageElement(StorageEnum.token)??'';
  }

}
