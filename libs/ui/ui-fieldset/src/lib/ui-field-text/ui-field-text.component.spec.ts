import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFieldTextComponent } from './ui-field-text.component';

describe('UiFieldTextComponent', () => {
  let component: UiFieldTextComponent;
  let fixture: ComponentFixture<UiFieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFieldTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
