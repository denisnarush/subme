import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilGoBackDirective } from './util-go-back/util-go-back.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [UtilGoBackDirective],
  exports: [UtilGoBackDirective],
})
export class DirectivesModule {}
