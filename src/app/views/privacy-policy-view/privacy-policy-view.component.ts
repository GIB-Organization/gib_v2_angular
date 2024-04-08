import { UnderlineTitleComponentComponent } from './../../components/layout-components/underline-title-component/underline-title-component.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy-view',
  standalone: true,
  imports: [TranslateModule, UnderlineTitleComponentComponent],
  templateUrl: './privacy-policy-view.component.html',
  styleUrl: './privacy-policy-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyViewComponent {

}
