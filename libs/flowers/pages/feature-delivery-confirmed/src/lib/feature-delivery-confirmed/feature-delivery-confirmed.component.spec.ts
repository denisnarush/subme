import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDeliveryConfirmedComponent } from './feature-delivery-confirmed.component';

describe('FeatureDeliveryConfirmedComponent', () => {
  let component: FeatureDeliveryConfirmedComponent;
  let fixture: ComponentFixture<FeatureDeliveryConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDeliveryConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDeliveryConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
