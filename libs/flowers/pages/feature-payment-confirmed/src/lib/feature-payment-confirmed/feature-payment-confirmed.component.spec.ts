import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePaymentConfirmedComponent } from './feature-payment-confirmed.component';

describe('FeaturePaymentConfirmedComponent', () => {
  let component: FeaturePaymentConfirmedComponent;
  let fixture: ComponentFixture<FeaturePaymentConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePaymentConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePaymentConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
