import { TestBed } from '@angular/core/testing';

import { RigthService } from './rigth.service';

describe('RigthService', () => {
  let service: RigthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RigthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
