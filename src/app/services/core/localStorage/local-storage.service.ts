import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { IStorageModel } from '../../../models/storage.model';
import { StorageEnum } from '../../../core/enums/storage.enum';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorageModel{
  #platformId = inject(PLATFORM_ID);
  
  getStorageElement(name: StorageEnum) {
    if(isPlatformBrowser(this.#platformId)) return localStorage.getItem(name);
    return null
  }
  setStorageElement(name: StorageEnum, value: any) {
    if(isPlatformBrowser(this.#platformId)) localStorage.setItem(name, value);
  }
}
