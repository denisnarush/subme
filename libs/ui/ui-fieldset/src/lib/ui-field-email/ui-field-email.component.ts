import { Component, ViewEncapsulation } from '@angular/core';
import { TFieldType, UiFieldEmail } from '../ui-ui-fieldset.interface';
import { UiField } from '../ui-field/ui-field.component';

@Component({
  selector: '[s-ui-field-email]',
  templateUrl: '../ui-field/ui-field.component.html',
  styleUrls: ['../ui-field/ui-field.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiFieldEmailComponent extends UiField implements UiFieldEmail {
  type: TFieldType = 'email';
}
