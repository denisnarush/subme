import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IUiTabs } from '../ui-tabs.interface';

@Component({
  selector: '.s-ui-tabs',
  templateUrl: './ui-tabs.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UiTabsComponent implements IUiTabs {
  @HostBinding() class = 'tabs';
  @Input() selected = 0;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.addEventListener('change', (event: Event) => {
      this.setTab(+(event.target as HTMLInputElement).value);
    });
  }

  private setTab(tab: number) {
    this.selected = tab;
    this.selectedChange.emit(tab);
  }
}
