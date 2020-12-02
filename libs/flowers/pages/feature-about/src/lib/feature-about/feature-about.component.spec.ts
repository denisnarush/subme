import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAboutComponent } from './feature-about.component';

describe('FeatureAboutComponent', () => {
  let component: FeatureAboutComponent;
  let fixture: ComponentFixture<FeatureAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
