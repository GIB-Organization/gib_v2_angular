import { BaseLinkComponentComponent } from './../../../components/base-components/base-link-component/base-link-component.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseLabelComponentComponent } from '../../../components/base-components/base-label-component/base-label-component.component';
import { BaseImageComponentComponent } from '../../../components/base-components/base-image-component/base-image-component.component';
import { DividerModule } from 'primeng/divider';
import { InputOtpModule } from 'primeng/inputotp';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SettingsQuery } from '../../../store/settings/settings.query';
import { TitleBoxComponentComponent } from '../../../components/views-components/compare-offers/title-box-component/title-box-component.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [TranslateModule, BaseLabelComponentComponent, BaseImageComponentComponent, DividerModule, InputOtpModule, BaseButtonComponentComponent, BaseLinkComponentComponent, UpperCasePipe, CurrencyPipe, TitleBoxComponentComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSummaryComponent {
 settingsQuery = inject(SettingsQuery);
}
