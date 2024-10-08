import { SettingsQuery } from './../../../store/settings/settings.query';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DeferBlockComponentComponent } from '../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from '../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InvoiceStoreQuery } from '../../../store/invoiceStore/invoice-store.query';
import { InvoiceStoreService } from '../../../store/invoiceStore/invoice-store.service';
import { BaseLinkComponentComponent } from '../../../components/base-components/base-link-component/base-link-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoadingContentComponentComponent } from '../../../components/shared-components/loading-content-component/loading-content-component.component';

@Component({
  selector: 'app-invoices-view',
  standalone: true,
  imports: [LoadingContentComponentComponent, DeferBlockComponentComponent, EmptyDataComponentComponent, ShadowBoxComponentComponent, InputNumberModule, TranslateModule, BaseButtonComponentComponent, CurrencyPipe, DividerModule, DatePipe, BaseLinkComponentComponent],
  templateUrl: './invoices-view.component.html',
  styleUrl: './invoices-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicesViewComponent implements OnInit{
  
  settingsQuery = inject(SettingsQuery);
  ref = inject(DestroyRef);
  invoiceStoreQuery = inject(InvoiceStoreQuery);
  invoiceStoreService = inject(InvoiceStoreService);
  invoices = toSignal(this.invoiceStoreQuery.invoices$);
  isLoading = toSignal(this.invoiceStoreQuery.selectLoading());
  ngOnInit(): void {
    this.invoiceStoreService.getAllInvoices(this.ref);
  }
}
