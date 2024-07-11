import { InsuranceInquireStoreQueryService } from './../../../../store/insuranceInquireStore/insurance-inquire-store.query';
import { BaseImageComponentComponent } from './../../../base-components/base-image-component/base-image-component.component';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-car-pallet-component',
  standalone: true,
  imports: [BaseImageComponentComponent],
  templateUrl: './car-pallet-component.component.html',
  styleUrl: './car-pallet-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarPalletComponentComponent {
  insuranceInquireStoreQuery = inject(InsuranceInquireStoreQueryService);
  carCharsAr:string = `${this.insuranceInquireStoreQuery.inquireResponse.plateText1} ${this.insuranceInquireStoreQuery.inquireResponse.plateText2} ${this.insuranceInquireStoreQuery.inquireResponse.plateText3}`;
}
