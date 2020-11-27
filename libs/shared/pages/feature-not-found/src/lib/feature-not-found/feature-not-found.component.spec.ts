import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNotFoundComponent } from './feature-not-found.component';

describe('FeatureNotFoundComponent', () => {
  let component: FeatureNotFoundComponent;
  let fixture: ComponentFixture<FeatureNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
