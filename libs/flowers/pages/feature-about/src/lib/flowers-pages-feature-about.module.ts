import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from '@s/shared/directives';

import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';
import { UiHeaderModule } from '@s/ui/ui-header';

import { FeatureAboutComponent } from './feature-about/feature-about.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    UiContentModule,
    UiFooterModule,
    UiHeaderModule,
    RouterModule.forChild([{ path: '', component: FeatureAboutComponent }]),
  ],
  declarations: [FeatureAboutComponent],
  exports: [FeatureAboutComponent],
})
export class FlowersPagesFeatureAboutModule {}
