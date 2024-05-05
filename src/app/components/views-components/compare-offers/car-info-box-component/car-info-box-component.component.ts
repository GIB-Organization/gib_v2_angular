import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { CarPalletComponentComponent } from '../car-pallet-component/car-pallet-component.component';
import { EPopover } from '../../../../core/enums/popover.enum';

@Component({
  selector: 'app-car-info-box-component',
  standalone: true,
  imports: [TranslateModule, BaseImageComponentComponent, BaseLabelComponentComponent, CarPalletComponentComponent],
  templateUrl: './car-info-box-component.component.html',
  styleUrl: './car-info-box-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarInfoBoxComponentComponent {
  get EPopover(){
    return EPopover
  }
}
