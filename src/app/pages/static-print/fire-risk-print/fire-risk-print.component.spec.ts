import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRiskPrintComponent } from './fire-risk-print.component';

describe('AddonPrintComponent', () => {
  let component: FireRiskPrintComponent;
  let fixture: ComponentFixture<FireRiskPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireRiskPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireRiskPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
