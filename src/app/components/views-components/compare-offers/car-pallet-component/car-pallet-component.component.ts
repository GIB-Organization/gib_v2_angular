import { BaseImageComponentComponent } from './../../../base-components/base-image-component/base-image-component.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-pallet-component',
  standalone: true,
  imports: [BaseImageComponentComponent],
  templateUrl: './car-pallet-component.component.html',
  styleUrl: './car-pallet-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarPalletComponentComponent {
  @Input() carNumber:number = 2233;
  @Input() carCharsAr:string = 'د ج و';
  @Input() carCharsEn:string = 'D G W';
}
