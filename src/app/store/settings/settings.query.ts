import { Query } from '@datorama/akita';
import { SettingsStore } from './settings.store';
import { ISettingsState } from './settings.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SettingsQuery extends Query<ISettingsState> {
    

    constructor(private _store: SettingsStore) {
        super(_store);
    }
    get phone() {
        return this.getValue().phone;
    }
    get email() {
        return this.getValue().email;
    }
    get currency() {
        return this.getValue().currency;
    }
}