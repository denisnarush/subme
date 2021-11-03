import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IUiTabs } from '../ui-tabs.interface';

@Component({
  selector: '[s-ui-tabs]',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'tabs' },
})
export class UiTabsComponent implements IUiTabs {
  @Input() selected: number = 0;
  @Output() selectedChange: EventEmitter<number> = new EventEmitter<number>();

  setTab(tab: number) {
    this.selected = tab;
    this.selectedChange.emit(tab);
  }
}
