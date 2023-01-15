import { TestBed } from '@angular/core/testing';

import { ComparerService } from './comparer.service';

describe('ComparerService', () => {
  let service: ComparerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('are equal objects', () => {
    const A: any = { id: 1 };
    const B: any = { id: 1 };
    expect(service.equals(A, B)).toBeTrue();
  });

  it('are different objects', () => {
    const A: any = { id: 1 };
    const B: any = { id: 2 };
    expect(service.equals(A, B)).toBeFalse();
  });

});
