import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Directive()
export abstract class UiField implements AfterViewInit {
  placeholder?: string;
  label?: string;

  @ViewChild('field') field: ElementRef<HTMLInputElement>;
  @Input() name: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const container: HTMLElement = this.field.nativeElement.parentElement
      .parentElement;

    this.placeholder = container.getAttribute('data-placeholder');
    this.label = container.getAttribute('data-label');

    this.cdr.detectChanges();
  }

  validate(): void {}
}
