import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByProductBranchPoliciesComponent } from './report-by-product-branch-policies.component';

describe('ReportByProductBranchPoliciesComponent', () => {
  let component: ReportByProductBranchPoliciesComponent;
  let fixture: ComponentFixture<ReportByProductBranchPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByProductBranchPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByProductBranchPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
