import { TestBed } from '@angular/core/testing';

import { NgNpmDummyService } from './ng-npm-dummy.service';

describe('NgNpmDummyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgNpmDummyService = TestBed.get(NgNpmDummyService);
    expect(service).toBeTruthy();
  });
});
