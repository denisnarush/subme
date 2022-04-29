import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '.s-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureHomeComponent {
  @HostBinding() class = 'page';
  type = 'flowers';
  period = 'month';
}
