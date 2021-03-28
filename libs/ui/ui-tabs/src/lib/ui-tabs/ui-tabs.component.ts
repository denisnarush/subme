import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IUiTabs, TTab } from '../ui-tabs.interface';

@Component({
  selector: '[s-ui-tabs]',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiTabsComponent implements IUiTabs {
  @Input() tabs: TTab[];
  @Input() selected: TTab;
  @Output() selectedChange: EventEmitter<TTab> = new EventEmitter<TTab>();

  setTab(tab: TTab) {
    this.selected = tab;
    this.selectedChange.emit(tab);
  }
}
