import { TestBed } from '@angular/core/testing';

import { LogearseService } from './logearse.service';

describe('LogearseService', () => {
  let service: LogearseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogearseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
