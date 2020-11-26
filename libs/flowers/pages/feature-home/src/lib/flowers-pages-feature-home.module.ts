import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';
import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    UiHeaderModule,
    UiContentModule,
    UiFooterModule,
    RouterModule.forChild([{ path: '', component: FeatureHomeComponent }]),
  ],
  declarations: [FeatureHomeComponent],
})
export class FlowersPagesFeatureHomeModule {}
