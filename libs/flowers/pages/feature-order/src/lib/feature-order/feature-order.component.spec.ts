import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOrderComponent } from './feature-order.component';

describe('FeatureOrderComponent', () => {
  let component: FeatureOrderComponent;
  let fixture: ComponentFixture<FeatureOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
