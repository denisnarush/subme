import { Component, ViewEncapsulation } from '@angular/core';
import { IUiModal } from '../ui-modal.interface';

@Component({
  selector: '[s-ui-modal]',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiModalComponent implements IUiModal {
  private active = false;

  toggle(): void {
    this.active = !this.active;
  }

  activate(): void {
    this.active = true;
  }

  deactivate(): void {
    this.active = false;
  }

  isActive(): boolean {
    return this.active === true;
  }
}
