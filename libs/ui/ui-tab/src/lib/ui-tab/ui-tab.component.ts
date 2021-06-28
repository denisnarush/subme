import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[s-ui-tab]',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiTabComponent {
  @Input() isSelected = false;
  @Output() activate = new EventEmitter<number>();

  constructor(private elRef: ElementRef) {}

  onClick(): void {
    this.activate.emit(
      [].slice
        .call(this.elRef.nativeElement.parentElement.children)
        .indexOf(this.elRef.nativeElement)
    );
  }
}
