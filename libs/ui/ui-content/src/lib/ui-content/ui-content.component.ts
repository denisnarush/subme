import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '.s-ui-content',
  templateUrl: './ui-content.component.html',
  styleUrls: ['./ui-content.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiContentComponent {
  @HostBinding() class = 'content';
}
