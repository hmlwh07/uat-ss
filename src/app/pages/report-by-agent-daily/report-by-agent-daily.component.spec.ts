import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByAgentDailyComponent } from './report-by-agent-daily.component';

describe('ReportByAgentDailyComponent', () => {
  let component: ReportByAgentDailyComponent;
  let fixture: ComponentFixture<ReportByAgentDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByAgentDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByAgentDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
