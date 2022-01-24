import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInWarehousesComponent } from './good-in-warehouses.component';

describe('GoodInWarehousesComponent', () => {
  let component: GoodInWarehousesComponent;
  let fixture: ComponentFixture<GoodInWarehousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodInWarehousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodInWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
