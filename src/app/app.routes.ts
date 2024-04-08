import { Routes } from '@angular/router';
import { ERoutes } from './core/enums/routes.enum';
import { IRoutingData } from './models/routing.model';

const mainLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./views/home-view/home-view.component').then(m => m.HomeViewComponent)
            },
            {
                path: ERoutes.about,
                loadComponent: () => import('./views/about-view/about-view.component').then(m => m.AboutViewComponent)
            },
            {
                path: `${ERoutes.blogPage}/:id`,
                loadComponent: () => import('./views/blog-single-view/blog-single-view.component').then(m => m.BlogSingleViewComponent)
            },
        ]
    }
]

const profileLayoutRoutes : Routes = [
    {
        path: '',
        redirectTo: `${ERoutes.cards}`,
        pathMatch: 'full',
        data:{
            animation: 'profile',
            title: 'views.profile.cards.title',
        } as IRoutingData
    },
    {
        path: ERoutes.cards,
        loadComponent: () => import('./views/profile-pages/cards-view/cards-view.component').then(m => m.CardsViewComponent),
        data:{
            animation: 'profileCards',
            title: 'views.profile.cards.title',
        } as IRoutingData
    },
    {
        path: ERoutes.cars,
        loadComponent: () => import('./views/profile-pages/cars-view/cars-view.component').then(m => m.CarsViewComponent),
        data:{
            animation: 'profileCars',
            title: 'views.profile.cars.title',
        } as IRoutingData
    },
    {
        path: ERoutes.uncompletedOrders,
        loadComponent: () => import('./views/profile-pages/uncompleted-orders-view/uncompleted-orders-view.component').then(m => m.UncompletedOrdersViewComponent),
        data:{
            animation: 'profileUncompletedOrders',
            title: 'views.profile.uncompletedOrders.title',
        } as IRoutingData
    },
    {
        path: ERoutes.supportTicket,
        loadComponent: () => import('./views/profile-pages/support-tickets-view/support-tickets-view.component').then(m => m.SupportTicketsViewComponent),
        data:{
            animation: 'profileSupport',
            title: 'views.profile.supportTicket.title',
        } as IRoutingData
    },
    {
        path: ERoutes.personalInfo,
        loadComponent: () => import('./views/profile-pages/personal-info-view/personal-info-view.component').then(m => m.PersonalInfoViewComponent),
        data:{
            animation: 'profileInfo',
            title: 'views.profile.personalInfo.title',
        } as IRoutingData
    },
    {
        path: ERoutes.epayments,
        loadComponent: () => import('./views/profile-pages/e-payments-view/e-payments-view.component').then(m => m.EPaymentsViewComponent),
        data:{
            animation: 'profilePayments',
            title: 'views.profile.epayments.title',
        } as IRoutingData
    },
]

const breadcrumbLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/breadcrumb-layout/breadcrumb-layout.component').then(m => m.BreadcrumbLayoutComponent),
        children: [
            {
                path: ERoutes.contact,
                loadComponent: () => import('./views/contact-view/contact-view.component').then(m => m.ContactViewComponent),
                data:{
                    animation: 'contact',
                    title: 'contact'
                } as IRoutingData
            },
            {
                path: ERoutes.blog,
                loadComponent: () => import('./views/blog-view/blog-view.component').then(m => m.BlogViewComponent),
                data:{
                    animation: 'blog',
                    title: 'blog'
                } as IRoutingData
            },
            {
                path: ERoutes.privacyPolicy,
                loadComponent: () => import('./views/privacy-policy-view/privacy-policy-view.component').then(m => m.PrivacyPolicyViewComponent),
                data:{
                    animation: 'privacy policy',
                    title: 'privacy policy'
                } as IRoutingData
            },
            {
                path: ERoutes.termsConditions,
                loadComponent: () => import('./views/terms-conditions-view/terms-conditions-view.component').then(m => m.TermsConditionsViewComponent),
                data:{
                    animation: 'terms and conditions',
                    title: 'terms and conditions'
                } as IRoutingData
            },
            {
                path: ERoutes.profile,
                loadComponent: () => import('./layouts/profile-layout/profile-layout.component').then(m => m.ProfileLayoutComponent),
                children:[
                    ...profileLayoutRoutes
                ],
                data:{
                    title: 'views.profile.title'
                } as IRoutingData
            },
        ]
    }
]



export const routes: Routes = [
    ...mainLayoutRoutes,
    ...breadcrumbLayoutRoutes
];
