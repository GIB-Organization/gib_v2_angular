import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarPalletComponentComponent } from '../../compare-offers/car-pallet-component/car-pallet-component.component';
import { BaseButtonComponentComponent } from "../../../base-components/base-button-component/base-button-component.component";
import { IPolicy } from '../../../../models/policy.interface';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-policy-box',
  standalone: true,
  imports: [TranslateModule, CarPalletComponentComponent, BaseButtonComponentComponent, DecimalPipe, DatePipe],
  templateUrl: './policy-box.component.html',
  styleUrl: './policy-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolicyBoxComponent {
  policy = input.required<IPolicy>();
  cardBrand = computed(()=>{
    return `${this.policy().carBrand} ${this.policy().carModel} ${this.policy().carYear}`
  })
}
