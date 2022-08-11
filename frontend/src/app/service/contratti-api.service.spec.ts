import { TestBed } from '@angular/core/testing';

import { ContrattiApiService } from './contratti-api.service';

describe('ContrattiApiService', () => {
  let service: ContrattiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrattiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
