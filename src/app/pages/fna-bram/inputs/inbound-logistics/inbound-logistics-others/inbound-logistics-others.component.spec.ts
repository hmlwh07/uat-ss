import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundLogisticsOthersComponent } from './inbound-logistics-others.component';

describe('InboundLogisticsOthersComponent', () => {
  let component: InboundLogisticsOthersComponent;
  let fixture: ComponentFixture<InboundLogisticsOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundLogisticsOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundLogisticsOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
