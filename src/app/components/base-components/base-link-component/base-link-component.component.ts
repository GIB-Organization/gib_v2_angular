import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-base-link-component',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './base-link-component.component.html',
  styleUrl: './base-link-component.component.scss',
})
export class BaseLinkComponentComponent {
  @Input() classes!: string;
  @Input({required: true}) path!: string;
  @Input() external: boolean = false;
}
