import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementDetailComponent } from './activity-management-detail.component';

describe('ActivityManagementDetailComponent', () => {
  let component: ActivityManagementDetailComponent;
  let fixture: ComponentFixture<ActivityManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityManagementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
