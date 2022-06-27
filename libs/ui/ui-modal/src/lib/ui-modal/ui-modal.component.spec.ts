import { ComponentFixture, TestBed } from '@angular/core/testing';
import exp = require('constants');

import { UiModalComponent } from './ui-modal.component';

describe('UiModalComponent', () => {
  let component: UiModalComponent;
  let fixture: ComponentFixture<UiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has "isActive(): boolean" method which returns boolean value represented state', () => {
    expect(component.isActive).toBeDefined();
    expect(typeof component.isActive() === 'boolean').toBe(true);
    expect(component.isActive()).toBe(false);
  });

  it('Has method "toggle(): void" which changes "active" state', () => {
    expect(component.toggle).toBeDefined();
    expect(component.toggle()).toBeUndefined();
    expect(component.isActive()).toBe(true);
    component.toggle();
    expect(component.isActive()).toBe(false);
  });

  it('Has method "activate(): void" which sets state to be active', () => {
    expect(component.activate).toBeDefined();
    expect(component.activate()).toBeUndefined();
    expect(component.isActive()).toBe(true);
    component.activate();
    expect(component.isActive()).toBe(true);
    component.toggle();
    component.activate();
    expect(component.isActive()).toBe(true);
  });

  it('Has method "deactivate(): void" which sets state to be inactive', () => {
    expect(component.deactivate).toBeDefined();
    expect(component.deactivate()).toBeUndefined();
    expect(component.isActive()).toBe(false);
    component.deactivate();
    expect(component.isActive()).toBe(false);
    component.toggle();
    component.deactivate();
    expect(component.isActive()).toBe(false);
  });
});
