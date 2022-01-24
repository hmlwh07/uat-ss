import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageViewComponent } from './coverage-view.component';

describe('CoverageViewComponent', () => {
  let component: CoverageViewComponent;
  let fixture: ComponentFixture<CoverageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
