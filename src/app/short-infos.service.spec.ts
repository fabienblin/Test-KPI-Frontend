import { TestBed } from '@angular/core/testing';

import { ShortInfosService } from './short-infos.service';

describe('ShortInfosService', () => {
  let service: ShortInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
