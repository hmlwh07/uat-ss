import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfrastructureComponent } from './service-infrastructure.component';

describe('ServiceInfrastructureComponent', () => {
  let component: ServiceInfrastructureComponent;
  let fixture: ComponentFixture<ServiceInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInfrastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
