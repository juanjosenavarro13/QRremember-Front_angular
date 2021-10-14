import { TestBed } from '@angular/core/testing';

import { FallecidosService } from './fallecidos.service';

describe('HistoriesService', () => {
  let service: FallecidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FallecidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
