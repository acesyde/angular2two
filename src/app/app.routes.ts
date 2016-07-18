import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: RouterConfig = [
  { path: '', component: DashboardComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];