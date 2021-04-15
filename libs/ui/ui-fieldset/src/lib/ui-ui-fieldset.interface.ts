export type TFieldType = 'email' | 'text' | 'password';

export interface IUiField {
  type: TFieldType;
}

export interface UiFieldText extends IUiField {}
export interface UiFieldEmail extends IUiField {}
export interface UiFieldPassword extends IUiField {}
