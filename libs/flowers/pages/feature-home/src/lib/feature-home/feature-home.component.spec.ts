import '@angular/localize/init';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UiHeaderModule } from '@s/ui/ui-header';
import { UiContentModule } from '@s/ui/ui-content';
import { UiFooterModule } from '@s/ui/ui-footer';
import { UiModalModule } from '@s/ui/ui-modal';
import { UiTabsModule } from '@s/ui/ui-tabs';
import { UiTabModule } from '@s/ui/ui-tab';
import { UiFieldsetModule } from '@s/ui/ui-fieldset';

import { FeatureHomeComponent } from './feature-home.component';

describe('FeatureHomeComponent', () => {
  let component: FeatureHomeComponent;
  let fixture: ComponentFixture<FeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UiHeaderModule,
        UiContentModule,
        UiFooterModule,
        UiModalModule,
        UiTabsModule,
        UiTabModule,
        UiFieldsetModule,
        RouterTestingModule,
      ],
      declarations: [FeatureHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
