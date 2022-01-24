import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSalesComponent } from './marketing-sales.component';

describe('MarketingSalesComponent', () => {
  let component: MarketingSalesComponent;
  let fixture: ComponentFixture<MarketingSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
