import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataInformationComponent } from './customer-data-information.component';

describe('CustomerDataInformationComponent', () => {
  let component: CustomerDataInformationComponent;
  let fixture: ComponentFixture<CustomerDataInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
