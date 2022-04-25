import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewManagementListComponent } from './renew-management-list.component';

describe('RenewManagementListComponent', () => {
  let component: RenewManagementListComponent;
  let fixture: ComponentFixture<RenewManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewManagementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
