import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpManagerDashboardComponent } from './lp-manager-dashboard.component';

describe('LpManagerDashboardComponent', () => {
  let component: LpManagerDashboardComponent;
  let fixture: ComponentFixture<LpManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpManagerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
