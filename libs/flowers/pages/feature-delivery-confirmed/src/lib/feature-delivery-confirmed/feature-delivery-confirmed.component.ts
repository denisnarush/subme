import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-delivery-confirmed].page',
  templateUrl: './feature-delivery-confirmed.component.html',
  styleUrls: ['./feature-delivery-confirmed.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDeliveryConfirmedComponent {}
