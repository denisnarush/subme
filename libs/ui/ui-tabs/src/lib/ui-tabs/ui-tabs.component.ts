import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IUiTab } from '../ui-tabs.interface';

@Component({
  selector: '[s-ui-tabs]',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiTabsComponent {
  @Input() tabs: IUiTab[];
  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  setTab(tabName: string) {
    this.selected = tabName;
    this.selectedChange.emit(tabName);
  }
}
