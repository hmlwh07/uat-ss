import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByAgentYearlyComponent } from './report-by-agent-yearly.component';

describe('ReportByAgentYearlyComponent', () => {
  let component: ReportByAgentYearlyComponent;
  let fixture: ComponentFixture<ReportByAgentYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByAgentYearlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByAgentYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
