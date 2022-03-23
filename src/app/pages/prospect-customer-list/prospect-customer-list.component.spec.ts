import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectCustomerListComponent } from './prospect-customer-list.component';

describe('ProspectCustomerListComponent', () => {
  let component: ProspectCustomerListComponent;
  let fixture: ComponentFixture<ProspectCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspectCustomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
