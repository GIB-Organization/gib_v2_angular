import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, inject, OnInit, PLATFORM_ID, viewChild } from '@angular/core';
import { PaymentStoreQuery } from '../../store/paymentStore/payment-store.query';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HYPER_PAY_SHOPPER_URL, HYPER_PAY_URL } from '../../core/injection-tokens/payments.token';
import { environment } from '../../../../environment';
@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide: HYPER_PAY_SHOPPER_URL, useValue: environment.hyperpayShopperUrl
    },{
      provide: HYPER_PAY_URL, useValue: environment.hyperpayUrl
    },
  ]
})
export class PaymentViewComponent implements AfterViewInit{
  paymentForm = viewChild<ElementRef>('paymentForm');
  paymentStoreQuery = inject(PaymentStoreQuery);
  detectRef = inject(ChangeDetectorRef);
  translate = inject(TranslateService);
  doc =  inject( DOCUMENT)
  hyperpayUrl =  inject( HYPER_PAY_URL)
  hyperpayShopperUrl =  inject( HYPER_PAY_SHOPPER_URL)
  isBrowser = false;
  constructor(@Inject(PLATFORM_ID) public platform_id: Object){
    this.isBrowser = isPlatformBrowser(platform_id);
  }

  ngAfterViewInit(){
    this.paymentForm()?.nativeElement.setAttribute('data-brands', this.paymentStoreQuery.paymentMethod);
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
      FORM_SCRIPT.src = `${this.hyperpayUrl}${this.paymentStoreQuery.checkoutId}`;
      CODE_SCRIPT.textContent = SCRIPT_CONTENT;
      document.body.appendChild(FORM_SCRIPT);
      document.body.appendChild(CODE_SCRIPT);
      this.detectRef.detectChanges()
    }
  }
}
