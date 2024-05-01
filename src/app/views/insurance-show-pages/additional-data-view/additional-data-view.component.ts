import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseAlertComponentComponent } from '../../../components/base-components/base-alert-component/base-alert-component.component';
import { BaseLabelComponentComponent } from '../../../components/base-components/base-label-component/base-label-component.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { IRadioInput } from '../../../models/layout-models/radio.interface';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-additional-data-view',
  standalone: true,
  imports: [TranslateModule, BaseAlertComponentComponent, BaseLabelComponentComponent, InputNumberModule, DropdownModule, TitleCasePipe, UpperCasePipe, BaseButtonComponentComponent, DividerModule, InputSwitchModule, InputTextareaModule ],
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
