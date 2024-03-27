import { Routes } from '@angular/router';
import { ERoutes } from './core/enums/routes.enum';

const mainLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: '',
                data:{
                    routeName: 'Home'
                },
                loadComponent: () => import('./views/home-view/home-view.component').then(m => m.HomeViewComponent)
            },
            {
                path: ERoutes.about,
                loadComponent: () => import('./views/about-view/about-view.component').then(m => m.AboutViewComponent)
            },
            {
                path: `${ERoutes.blogPage}/:id`,
                data:{
                    routeName: 'BlogPage'
                },
                loadComponent: () => import('./views/blog-single-view/blog-single-view.component').then(m => m.BlogSingleViewComponent)
            },
        ]
    }
]

const breadcrumbLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/breadcrumb-layout/breadcrumb-layout.component').then(m => m.BreadcrumbLayoutComponent),
        children: [
            {
                path: ERoutes.contact,
                loadComponent: () => import('./views/contact-view/contact-view.component').then(m => m.ContactViewComponent)
            },
            {
                path: ERoutes.blog,
                loadComponent: () => import('./views/blog-view/blog-view.component').then(m => m.BlogViewComponent)
            },
            {
                path: ERoutes.privacyPolicy,
                loadComponent: () => import('./views/privacy-policy-view/privacy-policy-view.component').then(m => m.PrivacyPolicyViewComponent)
            },
            {
                path: ERoutes.termsConditions,
                loadComponent: () => import('./views/terms-conditions-view/terms-conditions-view.component').then(m => m.TermsConditionsViewComponent)
            },
        ]
    }
]

export const routes: Routes = [
    ...mainLayoutRoutes,
    ...breadcrumbLayoutRoutes
];
