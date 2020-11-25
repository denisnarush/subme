import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
