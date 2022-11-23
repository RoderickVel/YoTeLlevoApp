import { TestBed } from '@angular/core/testing';

import { IngresadoAGuard } from './ingresado-a.guard';

describe('IngresadoAGuard', () => {
  let guard: IngresadoAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
