import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseAlertComponentComponent } from '../../../components/base-components/base-alert-component/base-alert-component.component';
import { BaseLabelComponent } from '../../../components/base-components/base-label/base-label.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { IRadioInput } from '../../../models/layout-models/radio.interface';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-additional-data-view',
  standalone: true,
  imports: [TranslateModule, BaseAlertComponentComponent, BaseLabelComponent, InputNumberModule, DropdownModule, TitleCasePipe, UpperCasePipe, BaseButtonComponentComponent, DividerModule],
  templateUrl: './additional-data-view.component.html',
  styleUrl: './additional-data-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalDataViewComponent {
  affiliationRadios:IRadioInput[]=[
    {
      id: '0',
      label:'views.insuranceShow.workMail',
      value:'workMail',
    },
    {
      id:' 1',
      label:'public.id',
      value:'id',
    },
    {
      id: '2',
      label:'views.insuranceShow.promoCode',
      value:'promoCode',
    },
  ]
}
