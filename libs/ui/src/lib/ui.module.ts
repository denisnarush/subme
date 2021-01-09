import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';
import { UiModalModule } from '@s/ui/ui-modal';
import { UiSliderModule } from '@s/ui/ui-slider';

@NgModule({
  imports: [CommonModule],
  exports: [
    UiHeaderModule,
    UiContentModule,
    UiFooterModule,
    UiModalModule,
    UiSliderModule,
  ],
})
export class UiModule {}
