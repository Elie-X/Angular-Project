import { TestBed } from '@angular/core/testing';

import { UiVideoPlayerService } from './ui-video-player.service';

describe('UiVideoPlayerService', () => {
  let service: UiVideoPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiVideoPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
