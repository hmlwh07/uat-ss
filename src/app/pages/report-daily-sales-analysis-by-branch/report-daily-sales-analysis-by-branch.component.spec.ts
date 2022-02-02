import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDailySalesAnalysisByBranchComponent } from './report-daily-sales-analysis-by-branch.component';

describe('ReportDailySalesAnalysisByBranchComponent', () => {
  let component: ReportDailySalesAnalysisByBranchComponent;
  let fixture: ComponentFixture<ReportDailySalesAnalysisByBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDailySalesAnalysisByBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDailySalesAnalysisByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
