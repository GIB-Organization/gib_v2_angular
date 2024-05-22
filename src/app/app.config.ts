import { environment } from './../../environment';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { translateModuleImport } from './core/config/translate.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { authInterceptor } from './core/interceptors/auth/auth.interceptor';
import { BASE_URL_TOKEN } from './core/injection-tokens/base-url.token';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};



export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: BASE_URL_TOKEN, useValue: environment.apiUrl
    },
    provideRouter(routes, withViewTransitions(), withInMemoryScrolling(scrollConfig)), 
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom([
      HttpClientModule, 
      TranslateModule,
      translateModuleImport()
    ]),
    provideHttpClient(
      withInterceptors([authInterceptor]),
    )
  ]
};
