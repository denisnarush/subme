import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-order].page',
  templateUrl: './feature-order.component.html',
  styleUrls: ['./feature-order.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureOrderComponent {}
