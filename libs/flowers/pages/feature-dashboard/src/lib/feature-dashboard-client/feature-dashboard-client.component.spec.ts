import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDashboardClientComponent } from './feature-dashboard-client.component';

describe('FeatureDashboardComponent', () => {
  let component: FeatureDashboardClientComponent;
  let fixture: ComponentFixture<FeatureDashboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureDashboardClientComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDashboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
