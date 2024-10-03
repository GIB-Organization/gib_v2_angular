import { UnderlineTitleComponentComponent } from './../../components/layout-components/underline-title-component/underline-title-component.component';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy-view',
  standalone: true,
  imports: [TranslateModule, UnderlineTitleComponentComponent],
  templateUrl: './privacy-policy-view.component.html',
  styleUrl: './privacy-policy-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyViewComponent implements OnInit{
  title = inject(Title);
  translateService = inject(TranslateService);
  meta = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle(this.translateService.instant('views.privacyPolicy.privacyPolicy'))
    this.meta.updateTag({ name: 'description', content: 'Your dynamic page description' });
  }
}
