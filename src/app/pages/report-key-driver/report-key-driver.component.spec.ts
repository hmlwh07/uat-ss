import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportKeyDriverComponent } from './report-key-driver.component';

describe('ReportKeyDriverComponent', () => {
  let component: ReportKeyDriverComponent;
  let fixture: ComponentFixture<ReportKeyDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportKeyDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportKeyDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
