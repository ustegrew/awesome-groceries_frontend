import { TestBed, inject } from '@angular/core/testing';

import { TproductStore.MockService } from './tproduct-store.mock.service';

describe('TproductStore.MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TproductStore.MockService]
    });
  });

  it('should be created', inject([TproductStore.MockService], (service: TproductStore.MockService) => {
    expect(service).toBeTruthy();
  }));
});
