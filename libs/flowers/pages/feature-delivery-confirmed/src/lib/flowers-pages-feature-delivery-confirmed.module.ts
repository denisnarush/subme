import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureDeliveryConfirmedComponent } from './feature-delivery-confirmed/feature-delivery-confirmed.component';
import { SharedPagesFeatureConfirmedModule } from '@s/shared/pages/feature-confirmed';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeatureDeliveryConfirmedComponent },
    ]),
    SharedPagesFeatureConfirmedModule,
  ],
  declarations: [FeatureDeliveryConfirmedComponent],
  exports: [FeatureDeliveryConfirmedComponent],
})
export class FlowersPagesFeatureDeliveryConfirmedModule {}
