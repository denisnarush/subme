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
  @Input() isSelected: boolean = false;
  @Output() onSelected = new EventEmitter<number>();

  constructor(private elRef: ElementRef) {}

  select(): void {
    this.onSelected.emit(
      [].slice
        .call(this.elRef.nativeElement.parentElement.children)
        .indexOf(this.elRef.nativeElement)
    );
  }
}
