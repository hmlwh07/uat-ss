import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoterPrintComponent } from './moter-print.component';

describe('MoterPrintComponent', () => {
  let component: MoterPrintComponent;
  let fixture: ComponentFixture<MoterPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoterPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoterPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
