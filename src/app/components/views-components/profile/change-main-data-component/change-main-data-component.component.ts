import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShadowBoxComponentComponent } from '../shadow-box-component/shadow-box-component.component';
import { BaseButtonComponentComponent } from '../../../base-components/base-button-component/base-button-component.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-change-main-data-component',
  standalone: true,
  imports: [ShadowBoxComponentComponent, BaseButtonComponentComponent, TranslateModule],
  templateUrl: './change-main-data-component.component.html',
  styleUrl: './change-main-data-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeMainDataComponentComponent {

}
