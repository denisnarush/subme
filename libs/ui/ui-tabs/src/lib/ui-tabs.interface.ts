import { EventEmitter } from '@angular/core';

export interface IUiTabs {
  tabs: TTab[];
  selected: TTab;
  selectedChange: EventEmitter<TTab>;

  setTab(tab: TTab): void;
}

export type TTab = {
  name: string;
};
