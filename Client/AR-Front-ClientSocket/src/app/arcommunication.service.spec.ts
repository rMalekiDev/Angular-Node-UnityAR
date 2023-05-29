import { TestBed } from '@angular/core/testing';

import { ARCommunicationService } from './arcommunication.service';

describe('ARCommunicationService', () => {
  let service: ARCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ARCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
