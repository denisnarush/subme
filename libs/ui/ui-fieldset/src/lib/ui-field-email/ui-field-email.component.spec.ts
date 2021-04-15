import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFieldEmailComponent } from './ui-field-email.component';

describe('UiFieldEmailComponent', () => {
  let component: UiFieldEmailComponent;
  let fixture: ComponentFixture<UiFieldEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFieldEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
