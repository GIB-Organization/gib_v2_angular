import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarPalletComponentComponent } from '../../compare-offers/car-pallet-component/car-pallet-component.component';
import { BaseButtonComponentComponent } from "../../../base-components/base-button-component/base-button-component.component";

@Component({
  selector: 'app-policy-box',
  standalone: true,
  imports: [TranslateModule, CarPalletComponentComponent, BaseButtonComponentComponent],
  templateUrl: './policy-box.component.html',
  styleUrl: './policy-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolicyBoxComponent {

}
