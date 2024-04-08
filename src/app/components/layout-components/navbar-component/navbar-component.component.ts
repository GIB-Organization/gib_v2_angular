import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseImageComponentComponent } from '../../base-components/base-image-component/base-image-component.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ERoutes } from '../../../core/enums/routes.enum';
import { AuthDialogComponentComponent } from '../../views-components/auth/auth-dialog-component/auth-dialog-component.component';
@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [BaseImageComponentComponent, TranslateModule, NgbCollapse, RouterLink, RouterLinkActive, AuthDialogComponentComponent],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponentComponent {
  isMenuCollapsed:boolean = true;
  loginDialog: boolean = false
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
