import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-payment-confirmed].page',
  templateUrl: './feature-payment-confirmed.component.html',
  styleUrls: ['./feature-payment-confirmed.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePaymentConfirmedComponent {}
