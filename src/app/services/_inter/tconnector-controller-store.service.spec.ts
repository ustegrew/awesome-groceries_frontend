import { TestBed, inject } from '@angular/core/testing';

import { TConnectorControllerStoreService } from './tconnector-controller-store.service';

describe('TconnectorControllerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TConnectorControllerStoreService]
    });
  });

  it('should be created', inject([TConnectorControllerStoreService], (service: TConnectorControllerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
