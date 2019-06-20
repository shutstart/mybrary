import { TestBed } from '@angular/core/testing';

import { BuybookService } from './buybook.service';

describe('BuybookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuybookService = TestBed.get(BuybookService);
    expect(service).toBeTruthy();
  });
});
