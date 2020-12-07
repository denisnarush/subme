import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from '@s/shared/directives';

import { UiModule } from '@s/ui';

import { FeatureAboutComponent } from './feature-about/feature-about.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DirectivesModule,
    RouterModule.forChild([{ path: '', component: FeatureAboutComponent }]),
  ],
  declarations: [FeatureAboutComponent],
  exports: [FeatureAboutComponent],
})
export class FlowersPagesFeatureAboutModule {}
