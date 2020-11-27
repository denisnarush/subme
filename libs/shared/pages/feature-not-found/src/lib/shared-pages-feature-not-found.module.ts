import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureNotFoundComponent } from './feature-not-found/feature-not-found.component';
import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';

@NgModule({
  imports: [
    CommonModule,
    UiHeaderModule,
    UiContentModule,
    UiFooterModule,
    RouterModule.forChild([{ path: '', component: FeatureNotFoundComponent }]),
  ],
  declarations: [FeatureNotFoundComponent],
  exports: [FeatureNotFoundComponent],
})
export class SharedPagesFeatureNotFoundModule {}
