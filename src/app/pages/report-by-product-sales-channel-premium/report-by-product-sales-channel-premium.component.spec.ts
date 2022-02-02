import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByProductSalesChannelPremiumComponent } from './report-by-product-sales-channel-premium.component';

describe('ReportByProductSalesChannelPremiumComponent', () => {
  let component: ReportByProductSalesChannelPremiumComponent;
  let fixture: ComponentFixture<ReportByProductSalesChannelPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByProductSalesChannelPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByProductSalesChannelPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
