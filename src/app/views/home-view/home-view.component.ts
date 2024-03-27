import { ApplyStepsComponentComponent } from './../../components/views-components/home/apply-steps-component/apply-steps-component.component';
import { PartnersLogosComponentComponent } from '../../components/views-components/home/partners-logos-component/partners-logos-component.component';
import { InsurancesSectionComponentComponent } from './../../components/views-components/home/insurances-section-component/insurances-section-component.component';
import { Component } from '@angular/core';
import { FaqsComponentComponent } from '../../components/views-components/home/faqs-component/faqs-component.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    ApplyStepsComponentComponent, 
    InsurancesSectionComponentComponent, 
    PartnersLogosComponentComponent,
    FaqsComponentComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
