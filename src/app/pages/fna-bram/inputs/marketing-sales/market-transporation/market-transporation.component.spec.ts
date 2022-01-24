import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTransporationComponent } from './market-transporation.component';

describe('MarketTransporationComponent', () => {
  let component: MarketTransporationComponent;
  let fixture: ComponentFixture<MarketTransporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketTransporationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTransporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
