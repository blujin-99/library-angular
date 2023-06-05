import { TestBed } from '@angular/core/testing';

import { MjydhService } from './mjydh.service';

describe('MjydhService', () => {
  let service: MjydhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MjydhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
