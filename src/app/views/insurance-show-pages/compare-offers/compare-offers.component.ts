import { QuotationsFilterComponent } from './../../../components/views-components/compare-offers/quotations-filter/quotations-filter.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleBoxComponentComponent } from '../../../components/views-components/compare-offers/title-box-component/title-box-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarInfoBoxComponentComponent } from '../../../components/views-components/compare-offers/car-info-box-component/car-info-box-component.component';
import { QuotationBoxComponent } from '../../../components/views-components/compare-offers/quotation-box/quotation-box.component';
import { EQuotationsTabs } from '../../../core/enums/quotations.enum';
import { DeferBlockComponentComponent } from '../../../components/shared-components/defer-block-component/defer-block-component.component';

@Component({
  selector: 'app-compare-offers',
  standalone: true,
  imports: [TitleBoxComponentComponent, TranslateModule, CarInfoBoxComponentComponent, QuotationsFilterComponent, QuotationBoxComponent, DeferBlockComponentComponent],
  templateUrl: './compare-offers.component.html',
  styleUrl: './compare-offers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompareOffersComponent {
  comprehensiveOrThird = signal<EQuotationsTabs>(EQuotationsTabs.thirdParty)
}
