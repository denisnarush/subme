import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';
import { Location } from '@angular/common';

import { SRoutes } from '../routes/routes';
import { Router } from '@angular/router';

describe('RootComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(SRoutes)],
      declarations: [RootComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
