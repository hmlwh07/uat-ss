import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByAgentWeeklyComponent } from './report-by-agent-weekly.component';

describe('ReportByAgentWeeklyComponent', () => {
  let component: ReportByAgentWeeklyComponent;
  let fixture: ComponentFixture<ReportByAgentWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByAgentWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByAgentWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
