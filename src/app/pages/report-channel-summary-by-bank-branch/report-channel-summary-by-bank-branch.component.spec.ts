import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportChannelSummaryByBankBranchComponent } from './report-channel-summary-by-bank-branch.component';

describe('ReportChannelSummaryByBankBranchComponent', () => {
  let component: ReportChannelSummaryByBankBranchComponent;
  let fixture: ComponentFixture<ReportChannelSummaryByBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportChannelSummaryByBankBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportChannelSummaryByBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
