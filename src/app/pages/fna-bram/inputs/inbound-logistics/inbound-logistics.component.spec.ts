import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundLogisticsComponent } from './inbound-logistics.component';

describe('InboundLogisticsComponent', () => {
  let component: InboundLogisticsComponent;
  let fixture: ComponentFixture<InboundLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboundLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
