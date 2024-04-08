import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { translateModuleImport } from './core/config/translate.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), 
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom([
      HttpClientModule, 
      TranslateModule,
      translateModuleImport()
    ]),
  ]
};
