import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSliderComponent } from './ui-slider/ui-slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiSliderComponent],
  exports: [UiSliderComponent],
})
export class UiSliderModule {}
