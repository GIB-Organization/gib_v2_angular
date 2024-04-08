import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UnderlineTitleComponentComponent } from '../../components/layout-components/underline-title-component/underline-title-component.component';

@Component({
  selector: 'app-terms-conditions-view',
  standalone: true,
  imports: [TranslateModule, UnderlineTitleComponentComponent],
  templateUrl: './terms-conditions-view.component.html',
  styleUrl: './terms-conditions-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsConditionsViewComponent {

}
