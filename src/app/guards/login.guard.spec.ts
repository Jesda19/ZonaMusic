import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let routerSpy = { navigateByUrl: jasmine.createSpy('navigateByUrl') };
  let storageSpy = { get: jasmine.createSpy('get').and.returnValue(Promise.resolve(false)) };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: Router, useValue: routerSpy },
        { provide: Storage, useValue: storageSpy },
      ]
    });

    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if user is logged in', async () => {
    storageSpy.get.and.returnValue(Promise.resolve(true));

    const result = await guard.canActivate();
    expect(result).toBe(true);
  });

  it('should not allow activation and redirect to login if user is not logged in', async () => {
    storageSpy.get.and.returnValue(Promise.resolve(false));

    const result = await guard.canActivate();
    expect(result).toBe(false);
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
