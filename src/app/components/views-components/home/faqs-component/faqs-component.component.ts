import { TranslateModule } from '@ngx-translate/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { UnderlineTitleComponentComponent } from '../../../layout-components/underline-title-component/underline-title-component.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faqs-component',
  standalone: true,
  imports: [TranslateModule, AccordionModule, UnderlineTitleComponentComponent],
  templateUrl: './faqs-component.component.html',
  styleUrl: './faqs-component.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FaqsComponentComponent {
  
}
