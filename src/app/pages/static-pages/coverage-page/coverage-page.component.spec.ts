import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePageComponent } from './coverage-page.component';

describe('CoveragePageComponent', () => {
  let component: CoveragePageComponent;
  let fixture: ComponentFixture<CoveragePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
