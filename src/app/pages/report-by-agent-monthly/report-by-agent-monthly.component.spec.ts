import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByAgentMonthlyComponent } from './report-by-agent-monthly.component';

describe('ReportByAgentMonthlyComponent', () => {
  let component: ReportByAgentMonthlyComponent;
  let fixture: ComponentFixture<ReportByAgentMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByAgentMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByAgentMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
