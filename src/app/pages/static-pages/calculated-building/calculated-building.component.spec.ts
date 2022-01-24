import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedBuildingComponent } from './calculated-building.component';

describe('CalculatedBuildingComponent', () => {
  let component: CalculatedBuildingComponent;
  let fixture: ComponentFixture<CalculatedBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
