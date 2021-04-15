import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFieldPasswordComponent } from './ui-field-password.component';

describe('UiFieldPasswordComponent', () => {
  let component: UiFieldPasswordComponent;
  let fixture: ComponentFixture<UiFieldPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFieldPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFieldPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
