import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUiTabs } from '../ui-tabs.interface';

@Component({
  selector: '.s-ui-tabs',
  templateUrl: './ui-tabs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsComponent implements IUiTabs {
  @HostBinding() class = 'tabs';
  selected$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.addEventListener('change', (event: Event) => {
      this.setTab(+(event.target as HTMLInputElement).value);
    });
  }

  private setTab(tab: number): void {
    this.selected$.next(tab);
  }
}
