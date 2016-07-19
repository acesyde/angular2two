import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { ToastyService, ToastyConfig } from 'ng2-toasty/ng2-toasty';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders, ToastyService, ToastyConfig]);

