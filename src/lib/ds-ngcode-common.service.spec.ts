import { TestBed } from '@angular/core/testing';

import { DsNgcodeCommonService } from './ds-ngcode-common.service';

describe('DsNgcodeCommonService', () => {
  let service: DsNgcodeCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsNgcodeCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
