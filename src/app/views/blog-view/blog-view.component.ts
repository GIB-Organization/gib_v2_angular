import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BlogBoxComponentComponent } from '../../components/views-components/blog/blog-box-component/blog-box-component.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [TranslateModule, BlogBoxComponentComponent, NgbPaginationModule ],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss'
})
export class BlogViewComponent {
  page=0
}
