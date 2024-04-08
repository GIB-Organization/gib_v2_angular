import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-base-link-component',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, RouterLinkActive],
  templateUrl: './base-link-component.component.html',
  styleUrl: './base-link-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLinkComponentComponent {
  @Input() classes!: string;
  @Input({required: true}) path!: string;
  @Input() external: boolean = false;
  @Input() activeClasses: string = '';
}
