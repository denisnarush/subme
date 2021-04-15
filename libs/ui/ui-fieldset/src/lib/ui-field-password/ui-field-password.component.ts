import { Component, ViewEncapsulation } from '@angular/core';
import { TFieldType, UiField } from '../ui-ui-fieldset.interface';
import { UiFieldDirective } from '../ui-field/ui-field.component';

@Component({
  selector: '[s-ui-field-password]',
  templateUrl: '../ui-field/ui-field.component.html',
  styleUrls: ['../ui-field/ui-field.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiFieldPasswordComponent
  extends UiFieldDirective
  implements UiField {
  type: TFieldType = 'password';
}