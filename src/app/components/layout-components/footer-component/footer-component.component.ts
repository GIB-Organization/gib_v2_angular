import { Component } from '@angular/core';
import { BaseImageComponentComponent } from '../../base-components/base-image-component/base-image-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { BaseLinkComponentComponent } from '../../base-components/base-link-component/base-link-component.component';
import { SidedIconComponentComponent } from '../../shared-component/sided-icon-component/sided-icon-component.component';
import { SettingsQuery } from '../../../store/settings/settings.query';
import { ERoutes } from '../../../core/enums/routes.enum';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [
    BaseImageComponentComponent,
    TranslateModule,
    BaseLinkComponentComponent,
    SidedIconComponentComponent,
    TranslateModule
  ],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent {
  get ERoutes(){
    return ERoutes
  }
  
  socialMedia: {icon:string, path:string}[]=[
    {
      icon: 'facebook',
      path:''
    },
    {
      icon: 'instagram',
      path:''
    },
    {
      icon: 'twitter',
      path:''
    },
    {
      icon: 'youtube',
      path:''
    },
  ]
  constructor(public settingsQuery: SettingsQuery){}

  getCurrentYear(){
    return new Date().getFullYear();
  }
}
