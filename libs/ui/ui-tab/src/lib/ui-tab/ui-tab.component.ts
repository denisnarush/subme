import {
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
})
export class UiTabComponent implements OnInit {
  @HostBinding() class = 'tabs__item';

  /* TODO: Find a way how to avoid using `ref` as @Input */
  @Input() ref;

  private id: number;

  get isSelected(): boolean {
    return this.ref.selected === this.id;
  }

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.id = [].slice
      .call(this.elRef.nativeElement.parentElement.children)
      .indexOf(this.elRef.nativeElement);
  }

  onClick(): void {
    this.ref.setTab(this.id);
  }
}
