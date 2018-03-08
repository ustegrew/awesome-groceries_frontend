import { TestBed, inject } from '@angular/core/testing';

import { TControllerService } from './tcontroller.service';

describe('TcontrollerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TControllerService]
    });
  });

  it('should be created', inject([TControllerService], (service: TControllerService) => {
    expect(service).toBeTruthy();
  }));
});
