import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[sUtilGoBack]',
})
export class UtilGoBackDirective {
  @HostListener('click') onMouseEnter() {
    this.location.back();
  }

  constructor(private location: Location) {}
}
