import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorLpDashboardComponent } from './senior-lp-dashboard.component';

describe('SeniorLpDashboardComponent', () => {
  let component: SeniorLpDashboardComponent;
  let fixture: ComponentFixture<SeniorLpDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorLpDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorLpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
