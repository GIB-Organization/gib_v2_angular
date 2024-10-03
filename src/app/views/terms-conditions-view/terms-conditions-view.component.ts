import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UnderlineTitleComponentComponent } from '../../components/layout-components/underline-title-component/underline-title-component.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-conditions-view',
  standalone: true,
  imports: [TranslateModule, UnderlineTitleComponentComponent],
  templateUrl: './terms-conditions-view.component.html',
  styleUrl: './terms-conditions-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsConditionsViewComponent {
  title = inject(Title);
  translateService = inject(TranslateService);
  meta = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle(this.translateService.instant('views.termsAndConditions.termsAndConditions'))
    this.meta.updateTag({ name: 'description', content: 'Your dynamic page description' });
  }
}
