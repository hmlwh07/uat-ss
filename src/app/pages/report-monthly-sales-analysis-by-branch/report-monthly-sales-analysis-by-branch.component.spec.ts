import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMonthlySalesAnalysisByBranchComponent } from './report-monthly-sales-analysis-by-branch.component';

describe('ReportMonthlySalesAnalysisByBranchComponent', () => {
  let component: ReportMonthlySalesAnalysisByBranchComponent;
  let fixture: ComponentFixture<ReportMonthlySalesAnalysisByBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMonthlySalesAnalysisByBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMonthlySalesAnalysisByBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
