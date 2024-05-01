import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-speed-rate',
  standalone: true,
  imports: [RatingModule, BaseImageComponentComponent, TooltipModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './company-speed-rate.component.html',
  styleUrl: './company-speed-rate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySpeedRateComponent {
  value = input<number>(2);
  formGroup = new FormGroup({
    value: new FormControl(this.value())
  });
}
