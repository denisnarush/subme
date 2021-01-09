import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSliderComponent } from './ui-slider.component';

describe('UiSliderComponent', () => {
  let component: UiSliderComponent;
  let fixture: ComponentFixture<UiSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
