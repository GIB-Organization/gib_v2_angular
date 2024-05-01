import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { UpperCasePipe } from '@angular/common';
import { BaseLabelComponentComponent } from '../../../base-components/base-label-component/base-label-component.component';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [TranslateModule, BaseButtonComponentComponent, UpperCasePipe, BaseLabelComponentComponent],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponentComponent {

}
