import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TFieldType, UiFieldText } from '../ui-ui-fieldset.interface';
import { UiField } from '../ui-field/ui-field.component';

@Component({
  selector: '[s-ui-field-text]',
  templateUrl: '../ui-field/ui-field.component.html',
  styleUrls: ['../ui-field/ui-field.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiFieldTextComponent extends UiField implements UiFieldText {
  type: TFieldType = 'text';
}
