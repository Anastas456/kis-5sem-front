import { TestBed } from '@angular/core/testing';

import { AgreementServiceService } from './agreement-service.service';

describe('AgreementServiceService', () => {
  let service: AgreementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgreementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
