import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTabComponent } from './ui-tab/ui-tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTabComponent],
  exports: [UiTabComponent],
})
export class UiTabModule {}
