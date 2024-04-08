import { AboutCompanyComponentComponent } from '../../components/views-components/about/about-company-component/about-company-component.component';
import { CompanyGoalsComponentComponent } from '../../components/views-components/about/company-goals-component/company-goals-component.component';
import { VisionMessageComponentComponent } from '../../components/views-components/about/vision-message-component/vision-message-component.component';
import { AboutBannerComponentComponent } from './../../components/views-components/about/about-banner-component/about-banner-component.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [AboutBannerComponentComponent, AboutCompanyComponentComponent, VisionMessageComponentComponent, CompanyGoalsComponentComponent],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutViewComponent {

}
