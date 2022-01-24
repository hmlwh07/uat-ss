import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPrintComponent } from './farmer-print.component';

describe('FarmerPrintComponent', () => {
  let component: FarmerPrintComponent;
  let fixture: ComponentFixture<FarmerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
