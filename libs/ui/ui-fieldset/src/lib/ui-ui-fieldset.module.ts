import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFieldEmailComponent } from './ui-field-email/ui-field-email.component';
import { UiFieldTextComponent } from './ui-field-text/ui-field-text.component';
import { UiFieldPasswordComponent } from './ui-field-password/ui-field-password.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiFieldEmailComponent,
    UiFieldTextComponent,
    UiFieldPasswordComponent,
  ],
  exports: [
    UiFieldEmailComponent,
    UiFieldTextComponent,
    UiFieldPasswordComponent,
  ],
})
export class UiFieldsetModule {}
