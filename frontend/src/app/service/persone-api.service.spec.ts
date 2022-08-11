import { TestBed } from '@angular/core/testing';

import { AziendeApiService } from './persone-api.service';

describe('AziendeApiService', () => {
  let service: AziendeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AziendeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
