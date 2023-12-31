import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'favorites-app',
    loadChildren: () =>
      loadRemoteModule('favorites-app', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'dashboard-app',
    loadChildren: () =>
      loadRemoteModule('dashboard-app', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard-app',
    pathMatch: 'full',
  },
];
