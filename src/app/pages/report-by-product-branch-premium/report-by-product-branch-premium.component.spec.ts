import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByProductBranchPremiumComponent } from './report-by-product-branch-premium.component';

describe('ReportByProductBranchPremiumComponent', () => {
  let component: ReportByProductBranchPremiumComponent;
  let fixture: ComponentFixture<ReportByProductBranchPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByProductBranchPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByProductBranchPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
