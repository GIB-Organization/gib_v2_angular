import { InputNumberModule } from 'primeng/inputnumber';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';
import { DeferBlockComponentComponent } from './../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from './../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ChangeDetectionStrategy, Component, inject, OnInit, WritableSignal, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyBoxComponent } from '../../../components/views-components/profile/policy-box/policy-box.component';
import { DividerModule } from 'primeng/divider';
import { PoliciesStoreQuery } from '../../../store/policiesStore/policies-store.query';
import { PoliciesStoreService } from '../../../store/policiesStore/policies-store.service';
import { LoadingContentComponentComponent } from '../../../components/shared-components/loading-content-component/loading-content-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PoliciesFilterPipe } from '../../../core/pipes/policiesFilter/policies-filter.pipe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-quotations-view',
  standalone: true,
  imports: [EmptyDataComponentComponent, DeferBlockComponentComponent, ShadowBoxComponentComponent, BaseButtonComponentComponent, InputNumberModule, TranslateModule, PolicyBoxComponent, DividerModule, LoadingContentComponentComponent, PoliciesFilterPipe, ReactiveFormsModule],
  templateUrl: './quotations-view.component.html',
  styleUrl: './quotations-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotationsViewComponent implements OnInit {
  policiesStoreQuery = inject(PoliciesStoreQuery)
  policiesStoreService = inject(PoliciesStoreService)
  isLoading= toSignal<boolean>(this.policiesStoreQuery.selectLoading())
  filter = new FormGroup({
    policyId: new FormControl(''),
    sequenceNumber: new FormControl(''),
    idNumber: new FormControl(''),
  })
  
  ngOnInit(): void {
      this.policiesStoreService.getAllPolicies();
  }


}
