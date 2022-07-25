import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[d-go-back]',
})
export class GoBackDirective {
  @HostListener('click') onMouseEnter(): void {
    this.location.back();
  }

  constructor(private location: Location) {}
}
