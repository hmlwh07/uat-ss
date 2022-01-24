import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicingEmployeesComponent } from './servicing-employees.component';

describe('ServicingEmployeesComponent', () => {
  let component: ServicingEmployeesComponent;
  let fixture: ComponentFixture<ServicingEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicingEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
