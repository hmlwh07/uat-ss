import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSalesOthersComponent } from './marketing-sales-others.component';

describe('MarketingSalesOthersComponent', () => {
  let component: MarketingSalesOthersComponent;
  let fixture: ComponentFixture<MarketingSalesOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingSalesOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSalesOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
