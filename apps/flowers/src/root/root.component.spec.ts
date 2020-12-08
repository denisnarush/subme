import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';
import { Location } from '@angular/common';

import { SRoutes } from '../routes/routes';
import { Router } from '@angular/router';

describe('RootComponent', () => {
  let fixture: ComponentFixture<RootComponent>;
  let root: RootComponent;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(SRoutes)],
      declarations: [RootComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(RootComponent);
    root = fixture.componentInstance;

    fixture.ngZone.run(() => {
      router.initialNavigation();
    });

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(root).toBeTruthy();
  });

  it(
    'should have /home page',
    waitForAsync(() => {
      fixture.ngZone.run(() => {
        fixture.whenStable().then(() => {
          router.navigate(['home']).then(() => {
            expect(location.path()).toBe('/home');
          });
        });
      });
    })
  );

  it(
    'should redirect from "" to /home',
    waitForAsync(() => {
      fixture.ngZone.run(() => {
        fixture.whenStable().then(() => {
          router.navigate(['']).then(() => {
            expect(location.path()).toBe('/home');
          });
        });
      });
    })
  );

  it(
    'should stay on unknown page',
    waitForAsync(() => {
      fixture.ngZone.run(() => {
        fixture.whenStable().then(() => {
          router.navigate(['wrong-page-name']).then(() => {
            expect(location.path()).toBe('/wrong-page-name');
          });
        });
      });
    })
  );

  it(
    'should display "Not Found" if it is unknown pag',
    waitForAsync(() => {
      fixture.ngZone.run(() => {
        fixture.whenStable().then(() => {
          router.navigate(['wrong-page-name']).then(() => {
            const h1: HTMLHeadingElement = fixture.nativeElement.querySelector(
              'h1'
            );
            expect(h1.textContent.indexOf('Not Found')).not.toBeGreaterThan(-1);
          });
        });
      });
    })
  );
});
