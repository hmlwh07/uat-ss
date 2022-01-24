import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingProcessComponent } from './manufacturing-process.component';

describe('ManufacturingProcessComponent', () => {
  let component: ManufacturingProcessComponent;
  let fixture: ComponentFixture<ManufacturingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
