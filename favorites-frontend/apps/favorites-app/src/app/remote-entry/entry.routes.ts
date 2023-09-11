import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@favorites-frontend/favorites-features').then(m => m.FavoritesFeaturesModule) },
];
