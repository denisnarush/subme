import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[s-feature-about].page',
  templateUrl: './feature-about.component.html',
  styleUrls: ['./feature-about.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureAboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}