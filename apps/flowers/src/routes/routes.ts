import { Routes } from '@angular/router';

export const SRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@s/flowers/pages/feature-home').then(
        (m) => m.FlowersPagesFeatureHomeModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@s/shared/pages/feature-not-found').then(
        (m) => m.SharedPagesFeatureNotFoundModule
      ),
  },
];
