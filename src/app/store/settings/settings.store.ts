// settings.store.ts
import { Store, StoreConfig } from '@datorama/akita';
import { ISettingsState } from './settings.model';
import { Injectable } from '@angular/core';


export const initialSettings : ISettingsState = {
    phone: '+96612717222',
    email: 'info@gib-sa.com'
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings' })
export class SettingsStore extends Store<ISettingsState> {
  constructor() {
    super(initialSettings);
  }
}