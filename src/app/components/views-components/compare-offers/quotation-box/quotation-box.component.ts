import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { CompanySpeedRateComponent } from '../company-speed-rate/company-speed-rate.component';
import { SettingsQuery } from '../../../../store/settings/settings.query';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { EQuotationsTabs } from '../../../../core/enums/quotations.enum';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { DropdownModule } from 'primeng/dropdown';
import { EPopover } from '../../../../core/enums/popover.enum';

@Component({
  selector: 'app-quotation-box',
  standalone: true,
  imports: [BaseImageComponentComponent, CompanySpeedRateComponent, TranslateModule, CurrencyPipe, BaseButtonComponentComponent, BaseLabelComponentComponent, DropdownModule],
  templateUrl: './quotation-box.component.html',
  styleUrl: './quotation-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationBoxComponent {
  settingsQuery = inject(SettingsQuery);
  comprehensiveOrThird = input<EQuotationsTabs>();

  get EQuotationsTabs(){
    return EQuotationsTabs;
  }
}
