import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeaderComponent } from './ui-header/ui-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiHeaderComponent],
  exports: [UiHeaderComponent],
})
export class UiHeaderModule {}
