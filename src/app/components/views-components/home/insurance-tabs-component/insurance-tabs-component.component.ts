import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-insurance-tabs-component',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './insurance-tabs-component.component.html',
  styleUrl: './insurance-tabs-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsuranceTabsComponentComponent {
  tabs:any[]=[
    {
      lang:'carInsurance',
      active:true,
    },
    {
      lang:'medicalInsurance',
      active:false,
    },
    {
      lang:'medicalFaultsInsurance',
      active:false,
    },
  ]
}
