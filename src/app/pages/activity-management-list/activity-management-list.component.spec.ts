import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementListComponent } from './activity-management-list.component';

describe('ActivityManagementListComponent', () => {
  let component: ActivityManagementListComponent;
  let fixture: ComponentFixture<ActivityManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityManagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
