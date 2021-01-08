import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@s/ui';
import { FeatureOrderComponent } from './feature-order/feature-order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureOrderComponent }]),
    UiModule,
  ],
  declarations: [FeatureOrderComponent],
  exports: [FeatureOrderComponent],
})
export class FlowersPagesFeatureOrderModule {}
