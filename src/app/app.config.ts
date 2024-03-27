import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { translateModuleImport } from './core/config/translate.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideClientHydration(),
    importProvidersFrom([
      HttpClientModule, 
      BrowserAnimationsModule,
      TranslateModule,
      translateModuleImport()
    ]),
  ]
};
