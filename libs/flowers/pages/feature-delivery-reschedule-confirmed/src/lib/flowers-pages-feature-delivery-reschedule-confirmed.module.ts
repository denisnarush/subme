import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line
import { FeatureDeliveryRescheduleConfirmedComponent } from './feature-delivery-reschedule-confirmed/feature-delivery-reschedule-confirmed.component';
import { SharedPagesFeatureConfirmedModule } from '@s/shared/pages/feature-confirmed';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeatureDeliveryRescheduleConfirmedComponent },
    ]),
    SharedPagesFeatureConfirmedModule,
  ],
  declarations: [FeatureDeliveryRescheduleConfirmedComponent],
  exports: [FeatureDeliveryRescheduleConfirmedComponent],
})
export class FlowersPagesFeatureDeliveryRescheduleConfirmedModule {}
