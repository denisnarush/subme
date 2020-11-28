import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureConfirmationComponent } from './feature-confirmation/feature-confirmation.component';
import { UiContentModule } from '@s/ui/ui-content';

@NgModule({
  imports: [
    CommonModule,
    UiContentModule,
    RouterModule.forChild([{ path: '', component: FeatureConfirmationComponent }])],
  declarations: [FeatureConfirmationComponent],
  exports: [FeatureConfirmationComponent],
})
export class SharedPagesFeatureConfirmationModule {}
