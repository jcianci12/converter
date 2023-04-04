import { TestBed } from '@angular/core/testing';

import { ObjecttypeService } from './objecttype.service';

describe('ObjecttypeService', () => {
  let service: ObjecttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjecttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
