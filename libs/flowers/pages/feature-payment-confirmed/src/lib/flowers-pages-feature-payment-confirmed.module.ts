import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturePaymentConfirmedComponent } from './feature-payment-confirmed/feature-payment-confirmed.component';
import { SharedPagesFeatureConfirmedModule } from '@s/shared/pages/feature-confirmed';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeaturePaymentConfirmedComponent }]),
    SharedPagesFeatureConfirmedModule,
  ],
  declarations: [FeaturePaymentConfirmedComponent],
  exports: [FeaturePaymentConfirmedComponent],
})
export class FlowersPagesFeaturePaymentConfirmedModule {}
