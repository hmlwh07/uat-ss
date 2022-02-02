import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCommonSearchComponent } from './report-common-search.component';

describe('ReportCommonSearchComponent', () => {
  let component: ReportCommonSearchComponent;
  let fixture: ComponentFixture<ReportCommonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCommonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCommonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
