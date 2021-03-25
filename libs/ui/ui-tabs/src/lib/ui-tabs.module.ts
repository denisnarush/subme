import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiTabsComponent],
  exports: [UiTabsComponent],
})
export class UiTabsModule {}
