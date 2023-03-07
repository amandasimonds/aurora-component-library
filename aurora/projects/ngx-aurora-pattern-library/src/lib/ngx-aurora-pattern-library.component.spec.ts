import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuroraPatternLibraryComponent } from './ngx-aurora-pattern-library.component';

describe('NgxAuroraPatternLibraryComponent', () => {
  let component: NgxAuroraPatternLibraryComponent;
  let fixture: ComponentFixture<NgxAuroraPatternLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAuroraPatternLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuroraPatternLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
