import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[d-go-back]',
})
export class GoBackDirective {
  @HostListener('click') onMouseEnter() {
    this.location.back();
  }

  constructor(private location: Location) {}
}
