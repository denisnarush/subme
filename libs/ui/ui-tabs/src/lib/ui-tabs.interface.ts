import { EventEmitter } from '@angular/core';

export interface IUiTabs {
  selected: number;
  selectedChange: EventEmitter<number>;

  setTab(tab: number): void;
}
