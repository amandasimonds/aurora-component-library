import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuroraButtonComponent } from './button.component';

describe('AuroraButtonComponent', () => {
  let component: AuroraButtonComponent;
  let fixture: ComponentFixture<AuroraButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuroraButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuroraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
