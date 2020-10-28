import { TestBed } from '@angular/core/testing';

import { DatosEnMemoriaService } from './datos-en-memoria.service';

describe('DatosEnMemoriaService', () => {
  let service: DatosEnMemoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEnMemoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
