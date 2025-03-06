import { TestBed } from '@angular/core/testing';

import { AssestsService } from './assests.service';

describe('AssestsService', () => {
  let service: AssestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
