import {
  Component,
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

  setTab(tab: number) {
    this.selected = tab;
    this.selectedChange.emit(tab);
  }
}
