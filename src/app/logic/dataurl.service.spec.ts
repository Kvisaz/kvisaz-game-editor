import { TestBed } from '@angular/core/testing';

import { DataUrlService } from './data-url.service';

describe('DataurlService', () => {
  let service: DataUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
