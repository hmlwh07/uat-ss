import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailByAgentComponent } from './report-detail-by-agent.component';

describe('ReportDetailByAgentComponent', () => {
  let component: ReportDetailByAgentComponent;
  let fixture: ComponentFixture<ReportDetailByAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDetailByAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
