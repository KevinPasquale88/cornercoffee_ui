import { TestBed } from '@angular/core/testing';

import { IntegrationapiService } from './integrationapi.service';

describe('IntegrationapiService', () => {
  let service: IntegrationapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrationapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
