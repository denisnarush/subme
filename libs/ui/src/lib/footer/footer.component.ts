import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
