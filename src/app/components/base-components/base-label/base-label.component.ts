import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-label',
  standalone: true,
  imports: [],
  templateUrl: './base-label.component.html',
  styleUrl: './base-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLabelComponent {
  @Input() classes!:string;
  @Input() for!:string;
  @Input() required:boolean = false;
}
