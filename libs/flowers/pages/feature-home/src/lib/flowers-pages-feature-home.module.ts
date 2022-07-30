import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';
import { UiModalModule } from '@s/ui/ui-modal';
import { UiTabsModule } from '@s/ui/ui-tabs';
import { UiTabModule } from '@s/ui/ui-tab';
import { UiFieldsetModule } from '@s/ui/ui-fieldset';

import { FeatureHomeComponent } from './feature-home/feature-home.component';

@NgModule({
  imports: [
    CommonModule,
    UiContentModule,
    UiFieldsetModule,
    UiFooterModule,
    UiHeaderModule,
    UiModalModule,
    UiTabModule,
    UiTabsModule,
    RouterModule.forChild([{ path: '', component: FeatureHomeComponent }]),
  ],
  declarations: [FeatureHomeComponent],
})
export class FlowersPagesFeatureHomeModule {}
