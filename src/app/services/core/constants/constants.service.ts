import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
function createArray(n: number) {
  return [...Array(n + 1).keys()]
}
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  translate = inject(TranslateService);

  chidrenUnder16List: number[] = createArray(16)
  fiveYearsAccidentsList: number[] = createArray(20)
  yearsHoldingLicenseList: number[] = createArray(50)
  yesNoList: { id: boolean, name: string }[] = [{ id: true, name: this.translate.instant('public.yes') }, { id: false, name: this.translate.instant('public.no') }];
}
