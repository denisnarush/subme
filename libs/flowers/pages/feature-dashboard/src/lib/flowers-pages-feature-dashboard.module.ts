import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@s/ui';
import { FeatureDashboardComponent } from './feature-dashboard/feature-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureDashboardComponent }]),
    UiModule,
  ],
  declarations: [FeatureDashboardComponent],
  exports: [FeatureDashboardComponent],
})
export class FlowersPagesFeatureDashboardModule {}
