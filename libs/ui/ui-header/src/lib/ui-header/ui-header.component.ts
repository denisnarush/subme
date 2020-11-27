import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-ui-header]',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
