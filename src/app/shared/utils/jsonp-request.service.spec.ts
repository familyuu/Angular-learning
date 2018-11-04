import { TestBed, inject } from '@angular/core/testing';

import { JsonpRequestService } from './jsonp-request.service';

describe('JsonpRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonpRequestService]
    });
  });

  it('should be created', inject([JsonpRequestService], (service: JsonpRequestService) => {
    expect(service).toBeTruthy();
  }));
});
