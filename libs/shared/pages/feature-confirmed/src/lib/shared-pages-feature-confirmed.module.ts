import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@s/ui';

import { FeatureConfirmedComponent } from './feature-confirmed/feature-confirmed.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [FeatureConfirmedComponent],
  exports: [FeatureConfirmedComponent],
})
export class SharedPagesFeatureConfirmedModule {}
