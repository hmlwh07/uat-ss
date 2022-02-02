import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWeeklySalesAnalysisByBranchComponent } from './report-weekly-sales-analysis-by-branch.component';

describe('ReportWeeklySalesAnalysisByBranchComponent', () => {
  let component: ReportWeeklySalesAnalysisByBranchComponent;
  let fixture: ComponentFixture<ReportWeeklySalesAnalysisByBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportWeeklySalesAnalysisByBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportWeeklySalesAnalysisByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
