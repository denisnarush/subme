import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContentComponent } from './ui-content.component';

describe('UiContentComponent', () => {
  let component: UiContentComponent;
  let fixture: ComponentFixture<UiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
