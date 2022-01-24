import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragePrintComponent } from './coverage-print.component';

describe('CoveragePrintComponent', () => {
  let component: CoveragePrintComponent;
  let fixture: ComponentFixture<CoveragePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
