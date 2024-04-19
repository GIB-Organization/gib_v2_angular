import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { UpperCasePipe } from '@angular/common';
import { BaseLabelComponent } from '../../../base-components/base-label/base-label.component';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [TranslateModule, BaseButtonComponentComponent, UpperCasePipe, BaseLabelComponent],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponentComponent {
  
}
