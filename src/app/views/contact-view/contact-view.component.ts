import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BaseButtonComponentComponent } from '../../components/base-components/base-button-component/base-button-component.component';
import { SettingsQuery } from '../../store/settings/settings.query';
import { BaseLinkComponentComponent } from '../../components/base-components/base-link-component/base-link-component.component';

@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [TranslateModule, BaseButtonComponentComponent, BaseLinkComponentComponent],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent {
  constructor( public settingsQuery: SettingsQuery ){}
}
