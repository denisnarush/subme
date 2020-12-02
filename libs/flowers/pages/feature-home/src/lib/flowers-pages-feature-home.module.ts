import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@s/ui';

import { FeatureHomeComponent } from './feature-home/feature-home.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([{ path: '', component: FeatureHomeComponent }]),
  ],
  declarations: [FeatureHomeComponent],
})
export class FlowersPagesFeatureHomeModule {}
