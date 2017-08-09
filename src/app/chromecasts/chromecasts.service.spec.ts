import { TestBed, inject } from '@angular/core/testing';

import { ChromecastsService } from './chromecasts.service';

describe('ChromecastsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChromecastsService]
    });
  });

  it('should be created', inject([ChromecastsService], (service: ChromecastsService) => {
    expect(service).toBeTruthy();
  }));
});
