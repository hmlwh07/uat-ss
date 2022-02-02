import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByProductSalesChannelPoliciesComponent } from './report-by-product-sales-channel-policies.component';

describe('ReportByProductSalesChannelPoliciesComponent', () => {
  let component: ReportByProductSalesChannelPoliciesComponent;
  let fixture: ComponentFixture<ReportByProductSalesChannelPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByProductSalesChannelPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByProductSalesChannelPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
