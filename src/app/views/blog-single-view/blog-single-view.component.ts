import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseImageComponentComponent } from '../../components/base-components/base-image-component/base-image-component.component';
import { SidedIconComponentComponent } from '../../components/shared-components/sided-icon-component/sided-icon-component.component';

@Component({
  selector: 'app-blog-single-view',
  standalone: true,
  imports: [BaseImageComponentComponent, SidedIconComponentComponent],
  templateUrl: './blog-single-view.component.html',
  styleUrl: './blog-single-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSingleViewComponent {

}
