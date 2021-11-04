import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '.s-ui-tab',
  templateUrl: './ui-tab.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UiTabComponent {
  @HostBinding() class = 'tabs__item';

  /* TODO: Find a way how to avoid using `ref` as @Input */
  @Input() ref;
  @Input() isSelected = false;

  constructor(private elRef: ElementRef) {}

  onClick(): void {
    const id = [].slice
      .call(this.elRef.nativeElement.parentElement.children)
      .indexOf(this.elRef.nativeElement);

    this.ref.setTab(id);
    this.isSelected = true;
  }
}
