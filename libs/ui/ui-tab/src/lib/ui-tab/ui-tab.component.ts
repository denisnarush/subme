import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '.s-ui-tab',
  templateUrl: './ui-tab.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabComponent implements OnInit {
  @HostBinding() class = 'tabs__item';
  @Input() isSelected = false;

  id: number;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.id = [].slice
      .call(this.elRef.nativeElement.parentElement.children)
      .indexOf(this.elRef.nativeElement);
  }
}
