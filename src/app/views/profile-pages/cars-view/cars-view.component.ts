import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeferBlockComponentComponent } from '../../../components/shared-components/defer-block-component/defer-block-component.component';
import { EmptyDataComponentComponent } from '../../../components/shared-components/empty-data-component/empty-data-component.component';
import { ShadowBoxComponentComponent } from '../../../components/views-components/profile/shadow-box-component/shadow-box-component.component';

@Component({
  selector: 'app-cars-view',
  standalone: true,
  imports: [DeferBlockComponentComponent, EmptyDataComponentComponent, ShadowBoxComponentComponent],
  templateUrl: './cars-view.component.html',
  styleUrl: './cars-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsViewComponent {

}
