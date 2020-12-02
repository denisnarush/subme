import { Routes } from '@angular/router';

export const SRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@s/flowers/pages/feature-home').then(
        (m) => m.FlowersPagesFeatureHomeModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@s/flowers/pages/feature-about').then(
        (m) => m.FlowersPagesFeatureAboutModule
      ),
  },
  {
    path: 'payment-confirmed',
    loadChildren: () =>
      import('@s/flowers/pages/feature-payment-confirmed').then(
        (m) => m.FlowersPagesFeaturePaymentConfirmedModule
      ),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'confirmed',
    loadChildren: () =>
      import('@s/shared/pages/feature-confirmed').then(
        (m) => m.SharedPagesFeatureConfirmedModule
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
