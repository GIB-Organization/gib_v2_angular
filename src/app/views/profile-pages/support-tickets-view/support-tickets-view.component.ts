import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeferBlockComponentComponent } from '../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from '../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../../components/base-components/base-button-component/base-button-component.component';
import { DialogComponentComponent } from '../../../components/shared-components/dialog-component/dialog-component.component';
import { FileUploadModule } from 'primeng/fileupload';
import { BaseLabelComponentComponent } from '../../../components/base-components/base-label-component/base-label-component.component';
@Component({
  selector: 'app-support-tickets-view',
  standalone: true,
  imports: [DeferBlockComponentComponent, EmptyDataComponentComponent, ShadowBoxComponentComponent, TranslateModule, BaseButtonComponentComponent, DialogComponentComponent, FileUploadModule, BaseLabelComponentComponent],
  templateUrl: './support-tickets-view.component.html',
  styleUrl: './support-tickets-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportTicketsViewComponent {
  newTicketDialog: boolean = false;
}
