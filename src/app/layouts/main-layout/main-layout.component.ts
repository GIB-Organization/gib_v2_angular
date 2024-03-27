import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../../components/layout-components/navbar-component/navbar-component.component';
import { RouterOutlet } from '@angular/router';
import { FooterContactComponentComponent } from '../../components/layout-components/footer-contact-component/footer-contact-component.component';
import { FooterComponentComponent } from '../../components/layout-components/footer-component/footer-component.component';
import { BreadcrumbComponentComponent } from '../../components/layout-components/breadcrumb-component/breadcrumb-component.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NavbarComponentComponent,
    RouterOutlet,
    FooterContactComponentComponent,
    FooterComponentComponent,
    BreadcrumbComponentComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
