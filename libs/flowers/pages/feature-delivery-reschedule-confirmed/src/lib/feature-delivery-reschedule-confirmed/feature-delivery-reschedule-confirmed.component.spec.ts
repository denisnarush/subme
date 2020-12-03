import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDeliveryRescheduleConfirmedComponent } from './feature-delivery-reschedule-confirmed.component';

describe('FeatureDeliveryRescheduleConfirmedComponent', () => {
  let component: FeatureDeliveryRescheduleConfirmedComponent;
  let fixture: ComponentFixture<FeatureDeliveryRescheduleConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDeliveryRescheduleConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDeliveryRescheduleConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
