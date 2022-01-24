import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundLogisticOthersComponent } from './outbound-logistics-others.component';

describe('OutboundLogisticOthersComponent', () => {
  let component: OutboundLogisticOthersComponent;
  let fixture: ComponentFixture<OutboundLogisticOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundLogisticOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundLogisticOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
