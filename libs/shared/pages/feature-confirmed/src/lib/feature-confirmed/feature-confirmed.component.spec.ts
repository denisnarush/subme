import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfirmedComponent } from './feature-confirmed.component';

describe('FeatureConfirmedComponent', () => {
  let component: FeatureConfirmedComponent;
  let fixture: ComponentFixture<FeatureConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
