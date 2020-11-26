import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-ui-content]',
  templateUrl: './ui-content.component.html',
  styleUrls: ['./ui-content.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
