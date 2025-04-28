import { TestBed } from '@angular/core/testing';

import { EarringserviceService } from './earringservice.service';

describe('EarringserviceService', () => {
  let service: EarringserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarringserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
