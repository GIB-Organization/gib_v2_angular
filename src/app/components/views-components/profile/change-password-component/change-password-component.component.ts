import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShadowBoxComponentComponent } from '../shadow-box-component/shadow-box-component.component';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password-component',
  standalone: true,
  imports: [ShadowBoxComponentComponent, BaseButtonComponentComponent, TranslateModule],
  templateUrl: './change-password-component.component.html',
  styleUrl: './change-password-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponentComponent {

}
