import { TestBed } from '@angular/core/testing';

import { VerperfilService } from './verperfil.service';

describe('VerperfilService', () => {
  let service: VerperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
