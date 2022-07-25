import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '.s-ui-footer',
  templateUrl: './ui-footer.component.html',
  styleUrls: ['./ui-footer.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFooterComponent {
  @HostBinding() class = 'footer';
}
