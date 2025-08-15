import { TestBed } from '@angular/core/testing';

import { MessagebadgeService } from './messagebadge.service';

describe('MessagebadgeService', () => {
  let service: MessagebadgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagebadgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
