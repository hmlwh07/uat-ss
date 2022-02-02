import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByBranchSummaryAiComponent } from './report-by-branch-summary-ai.component';

describe('ReportByBranchSummaryAiComponent', () => {
  let component: ReportByBranchSummaryAiComponent;
  let fixture: ComponentFixture<ReportByBranchSummaryAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByBranchSummaryAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByBranchSummaryAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
