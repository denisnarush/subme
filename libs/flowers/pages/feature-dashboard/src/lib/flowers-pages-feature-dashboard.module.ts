import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@s/ui';
import { FeatureDashboardClientComponent } from './feature-dashboard-client/feature-dashboard-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeatureDashboardClientComponent },
    ]),
    UiModule,
  ],
  declarations: [FeatureDashboardClientComponent],
  exports: [FeatureDashboardClientComponent],
})
export class FlowersPagesFeatureDashboardModule {}
