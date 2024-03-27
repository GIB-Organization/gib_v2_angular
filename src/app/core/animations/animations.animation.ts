import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' }))
    ])
]);

export const routeFadeAnimation = trigger('routeFadeAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('1s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
      animate('1s ease-in-out', style({ opacity: 0, transform: 'translateY(-10%)' }))
    ])
  ]);