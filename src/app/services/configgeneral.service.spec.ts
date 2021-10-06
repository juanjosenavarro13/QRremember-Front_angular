import { TestBed } from '@angular/core/testing';

import { ConfiggeneralService } from './configgeneral.service';

describe('ConfiggeneralService', () => {
  let service: ConfiggeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiggeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
