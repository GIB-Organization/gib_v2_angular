import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseImageComponentComponent } from '../../../base-components/base-image-component/base-image-component.component';
import { SidedIconComponentComponent } from '../../../shared-components/sided-icon-component/sided-icon-component.component';
import { RouterLink } from '@angular/router';
import { ERoutes } from '../../../../core/enums/routes.enum';

@Component({
  selector: 'app-blog-box-component',
  standalone: true,
  imports: [BaseImageComponentComponent, SidedIconComponentComponent, RouterLink],
  templateUrl: './blog-box-component.component.html',
  styleUrl: './blog-box-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogBoxComponentComponent {
  get ERoutes(){
    return ERoutes
  }
}
