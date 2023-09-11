import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@favorites-frontend/dashboard-features').then(m => m.DashboardFeaturesModule) },
];
