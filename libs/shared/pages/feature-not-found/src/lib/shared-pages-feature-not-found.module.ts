import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@s/ui';

import { FeatureNotFoundComponent } from './feature-not-found/feature-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([{ path: '', component: FeatureNotFoundComponent }]),
  ],
  declarations: [FeatureNotFoundComponent],
  exports: [FeatureNotFoundComponent],
})
export class SharedPagesFeatureNotFoundModule {}
