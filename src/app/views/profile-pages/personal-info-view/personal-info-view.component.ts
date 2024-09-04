import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChangeMainDataComponentComponent } from '../../../components/views-components/profile/change-main-data-component/change-main-data-component.component';
import { ChangePasswordComponentComponent } from '../../../components/views-components/profile/change-password-component/change-password-component.component';

@Component({
  selector: 'app-personal-info-view',
  standalone: true,
  imports: [ChangeMainDataComponentComponent, ChangePasswordComponentComponent],
  templateUrl: './personal-info-view.component.html',
  styleUrl: './personal-info-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoViewComponent {
  
}
 