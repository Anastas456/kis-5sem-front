import { TestBed } from '@angular/core/testing';

import { EmployeesServiceService } from './employees-service.service';

describe('EmployeesServiceService', () => {
  let service: EmployeesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
