import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';

@Directive()
export abstract class UiFieldDirective implements AfterViewInit {
  @HostBinding() class = 'field';
  placeholder?: string;
  label?: string;

  @ViewChild('field') field: ElementRef<HTMLInputElement>;
  @Input() name: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const field = this.field.nativeElement;
    const container = field.parentElement;

    this.placeholder = container.getAttribute('data-placeholder');
    container.removeAttribute('data-placeholder');
    this.label = container.getAttribute('data-label');
    container.removeAttribute('data-label');

    if (this.placeholder) {
      field.setAttribute('placeholder', this.placeholder);
    }

    this.cdr.detectChanges();
  }
}
