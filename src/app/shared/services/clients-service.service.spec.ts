import { TestBed } from '@angular/core/testing';

import { ClientsServiceService } from './clients-service.service';

describe('ClientsServiceService', () => {
  let service: ClientsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
