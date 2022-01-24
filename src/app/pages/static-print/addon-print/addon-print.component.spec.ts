import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonPrintComponent } from './addon-print.component';

describe('AddonPrintComponent', () => {
  let component: AddonPrintComponent;
  let fixture: ComponentFixture<AddonPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
