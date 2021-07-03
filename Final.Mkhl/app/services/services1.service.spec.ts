import { TestBed } from '@angular/core/testing';

import { Services1Service } from './services1.service';

describe('Services1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Services1Service = TestBed.get(Services1Service);
    expect(service).toBeTruthy();
  });
});
