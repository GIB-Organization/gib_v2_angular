import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button-component',
  standalone: true,
  imports: [],
  templateUrl: './base-button-component.component.html',
  styleUrl: './base-button-component.component.scss',
  host:{
    style: 'padding-left:0 !important;padding-right:0 !important;'
  }
})
export class BaseButtonComponentComponent {
  @Input() classes!: string;
  @Output() clicked = new EventEmitter();
}
