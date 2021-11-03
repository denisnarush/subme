import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

import { IUiTabs } from '@s/ui/ui-tabs';

@Component({
  selector: '[s-ui-tab]',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.less'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'tabs__item' },
})
export class UiTabComponent {
  @Input() ref: IUiTabs;
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
