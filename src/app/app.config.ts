import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { translateModuleImport } from './core/config/translate.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withInMemoryScrolling(scrollConfig)), 
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom([
      HttpClientModule, 
      TranslateModule,
      translateModuleImport()
    ]),
  ]
};
