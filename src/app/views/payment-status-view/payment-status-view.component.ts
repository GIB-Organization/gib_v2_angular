import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentStoreService } from '../../store/paymentStore/payment-store.service';
import { PaymentStoreQuery } from '../../store/paymentStore/payment-store.query';
import { BaseLinkComponentComponent } from '../../components/base-components/base-link-component/base-link-component.component';
import { BaseImageComponentComponent } from '../../components/base-components/base-image-component/base-image-component.component';
import { ERoutes } from '../../core/enums';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-status-view',
  standalone: true,
  imports: [BaseLinkComponentComponent, BaseImageComponentComponent, TranslateModule],
  templateUrl: './payment-status-view.component.html',
  styleUrl: './payment-status-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentStatusViewComponent implements OnInit{
  activatedRoute = inject(ActivatedRoute)
  paymentStoreService = inject(PaymentStoreService)
  paymentStoreQuery = inject(PaymentStoreQuery)

  get ERoutes(){
    return ERoutes;
  }

  ngOnInit(): void {
      const PARAMS = this.activatedRoute.snapshot.queryParams as {id:string, resoursePath:string};
      this.paymentStoreService.getPaymentStatus(PARAMS.id);
  }
//  http://localhost:4200/payment-status?id=A7B79E8316085E5A8CD1315EC44607E3.uat01-vm-tx03&resourcePath=%2Fv1%2Fcheckouts%2FA7B79E8316085E5A8CD1315EC44607E3.uat01-vm-tx03%2Fpayment
}
