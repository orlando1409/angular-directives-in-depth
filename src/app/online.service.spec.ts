import { TestBed, inject } from '@angular/core/testing';

import { OnlineService } from './online.service';

describe('OnlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlineService]
    });
  });

  it('should ...', inject([OnlineService], (service: OnlineService) => {
    expect(service).toBeTruthy();
  }));
});
