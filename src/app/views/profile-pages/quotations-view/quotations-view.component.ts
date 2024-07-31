import { InputNumberModule } from 'primeng/inputnumber';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';
import { DeferBlockComponentComponent } from './../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from './../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyBoxComponent } from '../../../components/views-components/profile/policy-box/policy-box.component';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-quotations-view',
  standalone: true,
  imports: [EmptyDataComponentComponent, DeferBlockComponentComponent, ShadowBoxComponentComponent, BaseButtonComponentComponent, InputNumberModule, TranslateModule, PolicyBoxComponent, DividerModule],
  templateUrl: './quotations-view.component.html',
  styleUrl: './quotations-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationsViewComponent {

}
