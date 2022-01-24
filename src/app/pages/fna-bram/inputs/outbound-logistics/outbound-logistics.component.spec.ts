import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundLogisticsComponent } from './outbound-logistics.component';

describe('OutboundLogisticsComponent', () => {
  let component: OutboundLogisticsComponent;
  let fixture: ComponentFixture<OutboundLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
