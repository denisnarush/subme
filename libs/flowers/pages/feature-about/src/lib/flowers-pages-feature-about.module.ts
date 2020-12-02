import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureAboutComponent } from './feature-about/feature-about.component';
import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    UiHeaderModule,
    UiContentModule,
    UiFooterModule,
    RouterModule.forChild([{ path: '', component: FeatureAboutComponent }]),
  ],
  declarations: [FeatureAboutComponent],
  exports: [FeatureAboutComponent],
})
export class FlowersPagesFeatureAboutModule {}
