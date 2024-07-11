import { inject, Injectable } from '@angular/core';
import { ESortingEnum } from '../../core/enums';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SortingService {
  translate = inject(TranslateService);
  sortingList:{name:string, key:ESortingEnum}[]=[
    { name:  this.translate.instant('sortingEnum.asc'), key: ESortingEnum.ascending},
    { name:  this.translate.instant('sortingEnum.des'), key: ESortingEnum.descending},
  ]
}
