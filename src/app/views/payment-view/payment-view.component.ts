import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PaymentStoreQuery } from '../../store/paymentStore/payment-store.query';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentViewComponent implements AfterViewInit{
  paymentStoreQuery = inject(PaymentStoreQuery);
  detectRef = inject(ChangeDetectorRef);
  translate = inject(TranslateService);
  doc =  inject( DOCUMENT)
  isBrowser = false;
  constructor(@Inject(PLATFORM_ID) public platform_id: Object){
    this.isBrowser = isPlatformBrowser(platform_id);
  }

  ngAfterViewInit(){
    if(this.isBrowser){
      const FORM_SCRIPT = this.doc.createElement('script');
      const CODE_SCRIPT = this.doc.createElement('script');
      CODE_SCRIPT.type = 'text/javascript';
      const lang = this.translate.getDefaultLang();
      const SCRIPT_CONTENT = `
        var wpwlOptions = {
          locale: "${lang}",
          paymentTarget: '_blank',
          shopperResultTarget: '_blank',
        }
      `
      FORM_SCRIPT.defer = true;
      FORM_SCRIPT.async = true;
      FORM_SCRIPT.src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.paymentStoreQuery.checkoutId}`;
      CODE_SCRIPT.textContent = SCRIPT_CONTENT;
      document.body.appendChild(FORM_SCRIPT);
      document.body.appendChild(CODE_SCRIPT);
      this.detectRef.detectChanges()
    }
  }
}
