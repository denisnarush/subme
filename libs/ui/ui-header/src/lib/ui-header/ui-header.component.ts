import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '.s-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeaderComponent {
  @HostBinding() class = 'header';
}
