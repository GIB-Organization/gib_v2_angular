import { Injectable, inject } from '@angular/core';
import { IDateService, IMonth } from '../../models/date.interface';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class GregorianDateService implements IDateService {

  translateService = inject(TranslateService);
  months = this.generateArrayOfMonths();
  years = this.generateArrayOfYears();


  generateArrayOfYears() {
    let max = new Date().getFullYear()
    let min = max - 100
    let years = []

    for (let i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  };
  generateArrayOfMonths() {
    let months:IMonth[] = []
    for (var i = 1; i <= 12; i++) {
      months.push({id: i, name: this.translateService.instant(`months.gregorian.${i}`)})
    }
    return months
  };
}
