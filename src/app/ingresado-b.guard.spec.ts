import { TestBed } from '@angular/core/testing';

import { IngresadoBGuard } from './ingresado-b.guard';

describe('IngresadoBGuard', () => {
  let guard: IngresadoBGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoBGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
