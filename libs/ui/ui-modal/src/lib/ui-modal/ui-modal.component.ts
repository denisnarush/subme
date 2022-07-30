import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { IUiModal } from '../ui-modal.interface';

@Component({
  selector: '.s-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalComponent implements IUiModal {
  @HostBinding() class = 'modal';
  private active = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  toggle(): void {
    this.active = !this.active;
    this.cdRef.detectChanges();
  }

  activate(): void {
    this.active = true;
    this.cdRef.detectChanges();
  }

  deactivate(): void {
    this.active = false;
    this.cdRef.detectChanges();
  }

  isActive(): boolean {
    return this.active === true;
  }
}
