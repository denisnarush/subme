import { BehaviorSubject } from 'rxjs';

export interface IUiTabs {
  selected$: BehaviorSubject<number>;
}
