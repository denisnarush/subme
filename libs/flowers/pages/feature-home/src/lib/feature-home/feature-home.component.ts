import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-home].page',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureHomeComponent {
  type = 'flowers';
  period = 'month';
}
