import { TestBed } from '@angular/core/testing';

import { VeganService } from './vegan.service';

describe('VeganService', () => {
  let service: VeganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
