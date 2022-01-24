import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementInfrastructureComponent } from './management-infrastructure.component';

describe('ManagementInfrastructureComponent', () => {
  let component: ManagementInfrastructureComponent;
  let fixture: ComponentFixture<ManagementInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementInfrastructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
