import { SettingsQuery } from './../../../store/settings/settings.query';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeferBlockComponentComponent } from '../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from '../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { CurrencyPipe } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-invoices-view',
  standalone: true,
  imports: [DeferBlockComponentComponent, EmptyDataComponentComponent, ShadowBoxComponentComponent, InputNumberModule, TranslateModule, BaseButtonComponentComponent, CurrencyPipe, DividerModule],
  templateUrl: './invoices-view.component.html',
  styleUrl: './invoices-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicesViewComponent {
  settingsQuery = inject(SettingsQuery);
}
