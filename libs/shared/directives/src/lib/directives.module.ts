import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoBackDirective } from './go-back/go-back.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GoBackDirective],
  exports: [GoBackDirective],
})
export class DirectivesModule {}
