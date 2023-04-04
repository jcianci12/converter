import { TestBed } from '@angular/core/testing';

import { GetpropertiesforobjectinarrayService } from './getpropertiesforobjectinarray.service';

describe('GetpropertiesforobjectinarrayService', () => {
  let service: GetpropertiesforobjectinarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpropertiesforobjectinarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
