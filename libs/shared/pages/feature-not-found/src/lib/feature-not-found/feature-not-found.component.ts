import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-not-found].page',
  templateUrl: './feature-not-found.component.html',
  styleUrls: ['./feature-not-found.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureNotFoundComponent {}
