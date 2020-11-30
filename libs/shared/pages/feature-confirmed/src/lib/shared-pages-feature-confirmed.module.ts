import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureConfirmedComponent } from './feature-confirmed/feature-confirmed.component';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    UiContentModule,
    UiFooterModule,
    RouterModule.forChild([{ path: '', component: FeatureConfirmedComponent }]),
  ],
  declarations: [FeatureConfirmedComponent],
  exports: [FeatureConfirmedComponent],
})
export class SharedPagesFeatureConfirmedModule {}
