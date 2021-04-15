import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TFieldType, UiFieldPassword } from '../ui-ui-fieldset.interface';
import { UiField } from '../ui-field/ui-field.component';

@Component({
  selector: '[s-ui-field-password]',
  templateUrl: '../ui-field/ui-field.component.html',
  styleUrls: ['../ui-field/ui-field.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiFieldPasswordComponent
  extends UiField
  implements UiFieldPassword {
  type: TFieldType = 'password';
}
