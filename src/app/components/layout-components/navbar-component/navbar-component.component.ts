import { Component } from '@angular/core';
import { BaseImageComponentComponent } from '../../base-components/base-image-component/base-image-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ERoutes } from '../../../core/enums/routes.enum';
@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [BaseImageComponentComponent, TranslateModule, NgbCollapse, RouterLink, RouterLinkActive],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent {
  isMenuCollapsed:boolean = true;
  navLinks:{lang:string, link:string}[]=[
    {
      lang: 'whoWeAre',
      link:ERoutes.about
    },
    {
      lang: 'bolg',
      link:ERoutes.blog
    },
    {
      lang: 'contactUs',
      link:ERoutes.contact
    },
  ]
}
