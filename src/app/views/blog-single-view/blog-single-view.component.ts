import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { BaseImageComponentComponent } from '../../components/base-components/base-image-component/base-image-component.component';
import { SidedIconComponentComponent } from '../../components/shared-components/sided-icon-component/sided-icon-component.component';
import { WebsiteStoreService } from '../../store/websiteStore/website-store.service';
import { WebsiteStoreQuery } from '../../store/websiteStore/website-store.query';
import { DatePipe } from '@angular/common';
import { LoadingContentComponentComponent } from '../../components/shared-components/loading-content-component/loading-content-component.component';
import { DeferBlockComponentComponent } from '../../components/shared-components/defer-block-component/defer-block-component.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-single-view',
  standalone: true,
  imports: [BaseImageComponentComponent, SidedIconComponentComponent, DatePipe, LoadingContentComponentComponent, DeferBlockComponentComponent],
  templateUrl: './blog-single-view.component.html',
  styleUrl: './blog-single-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogSingleViewComponent implements OnInit{
  slug = input<string>('')
  websiteStoreService = inject(WebsiteStoreService)
  websiteStoreQuery = inject(WebsiteStoreQuery)
  isLoading = toSignal(this.websiteStoreQuery.selectLoading())

  ngOnInit(): void {
    this.websiteStoreService.getBlogBySlug(this.slug());
  }
}
