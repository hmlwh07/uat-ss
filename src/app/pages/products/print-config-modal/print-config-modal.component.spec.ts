import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintConfigModalComponent } from './print-config-modal.component';

describe('PrintConfigModalComponent', () => {
  let component: PrintConfigModalComponent;
  let fixture: ComponentFixture<PrintConfigModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintConfigModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
