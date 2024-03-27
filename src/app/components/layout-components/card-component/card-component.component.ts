import { Component, Input } from '@angular/core';
import { BaseImageComponentComponent } from '../../base-components/base-image-component/base-image-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { ICard } from '../../../models/layout-models/card';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [BaseImageComponentComponent, TranslateModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
@Input({required: true}) data!: ICard
}
