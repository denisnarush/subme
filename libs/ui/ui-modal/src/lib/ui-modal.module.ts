import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';
import { UiModalComponent } from './ui-modal/ui-modal.component';

@NgModule({
  imports: [CommonModule, UiHeaderModule, UiContentModule, UiFooterModule],
  declarations: [UiModalComponent],
  exports: [UiModalComponent],
})
export class UiModalModule {}
