import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  translate = inject(TranslateService);

  handleBackendLocalKeys(key:string){
    const LANG = this.translate.getDefaultLang();
    return `${key}${LANG.charAt(0).toUpperCase() + LANG.charAt(1)}`
  }
}
