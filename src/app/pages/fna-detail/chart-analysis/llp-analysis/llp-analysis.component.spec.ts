import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlpAnalysisComponent } from './llp-analysis.component';

describe('LlpAnalysisComponent', () => {
  let component: LlpAnalysisComponent;
  let fixture: ComponentFixture<LlpAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlpAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlpAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
