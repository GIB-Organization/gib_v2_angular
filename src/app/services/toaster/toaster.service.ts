import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  messages: Message[] = [];
  messageService = inject(MessageService);
  translate = inject(TranslateService);
  addSuccess(message:string){
    this.messageService.add({
      severity: 'success',
      summary: this.translate.instant('public.success'),
      detail:  this.translate.instant(message)
    })
  }
  addError(message:string){
    this.messageService.add({
      severity: 'error',
      summary:  this.translate.instant('public.error'),
      detail:  this.translate.instant(message)
    })
  }
}
