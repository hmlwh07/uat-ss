import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoSignPrintComponent } from './endo-sign-print.component';

describe('MoterPrintComponent', () => {
  let component: EndoSignPrintComponent;
  let fixture: ComponentFixture<EndoSignPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndoSignPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoSignPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
