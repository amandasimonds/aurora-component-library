import { TestBed } from '@angular/core/testing';

import { NgxAuroraPatternLibraryService } from './ngx-aurora-pattern-library.service';

describe('NgxAuroraPatternLibraryService', () => {
  let service: NgxAuroraPatternLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAuroraPatternLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
