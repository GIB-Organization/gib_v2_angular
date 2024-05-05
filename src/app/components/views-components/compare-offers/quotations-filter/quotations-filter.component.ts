import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';
import { SettingsQuery } from '../../../../store/settings/settings.query';
import { EQuotationsTabs } from '../../../../core/enums/quotations.enum';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-quotations-filter',
  standalone: true,
  imports: [BaseButtonComponentComponent, TranslateModule, CurrencyPipe, BaseLabelComponentComponent, DropdownModule],
  templateUrl: './quotations-filter.component.html',
  styleUrl: './quotations-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationsFilterComponent {
  settingsQuery = inject(SettingsQuery);
  activeTab = model<EQuotationsTabs>(EQuotationsTabs.thirdParty);

  get EQuotationsTabs(){
    return EQuotationsTabs
  }

  setActiveTab(tab:EQuotationsTabs){
    this.activeTab.set(tab);
  }
 
  setActiveTabClasses(tab:EQuotationsTabs){
    return this.activeTab() === tab ? 'btn-primary text-white':'btn-light'
  }
}
