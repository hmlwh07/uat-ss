import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailByBankBranchComponent } from './report-detail-by-bank-branch.component';

describe('ReportDetailByBankBranchComponent', () => {
  let component: ReportDetailByBankBranchComponent;
  let fixture: ComponentFixture<ReportDetailByBankBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDetailByBankBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailByBankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
