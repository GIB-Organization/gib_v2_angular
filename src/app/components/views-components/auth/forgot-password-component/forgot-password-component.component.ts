import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { BaseLabelComponent } from '../../../base-components/base-label/base-label.component';

@Component({
  selector: 'app-forgot-password-component',
  standalone: true,
  imports: [BaseButtonComponentComponent, TranslateModule, UpperCasePipe, BaseLabelComponent],
  templateUrl: './forgot-password-component.component.html',
  styleUrl: './forgot-password-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponentComponent {

}
