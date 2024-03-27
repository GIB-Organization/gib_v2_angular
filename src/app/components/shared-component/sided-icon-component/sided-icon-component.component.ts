import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sided-icon-component',
  standalone: true,
  imports: [],
  templateUrl: './sided-icon-component.component.html',
  styleUrl: './sided-icon-component.component.scss'
})
export class SidedIconComponentComponent {
 @Input() icon!: string;
 @Input() iconClass!: string;
 @Input() classes!: string;
}
