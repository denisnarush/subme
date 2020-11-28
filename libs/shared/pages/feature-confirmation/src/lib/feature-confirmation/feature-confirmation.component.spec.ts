import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfirmationComponent } from './feature-confirmation.component';

describe('FeatureConfirmationComponent', () => {
  let component: FeatureConfirmationComponent;
  let fixture: ComponentFixture<FeatureConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
