import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button-component',
  standalone: true,
  imports: [],
  templateUrl: './base-button-component.component.html',
  styleUrl: './base-button-component.component.scss',
  host:{
    style: 'padding-left:0 !important;padding-right:0 !important;'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseButtonComponentComponent {
  @Input() classes!: string;
  @Input() icon!: string;
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter();

  buttonClicked(){
    this.clicked.emit()
  }
}
