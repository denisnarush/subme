import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-dashboard-client].page',
  templateUrl: './feature-dashboard-client.component.html',
  styleUrls: ['./feature-dashboard-client.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDashboardClientComponent {}
