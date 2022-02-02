import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculatedBuildingComponent } from './add-calculated-building.component';

describe('AddCalculatedBuildingComponent', () => {
  let component: AddCalculatedBuildingComponent;
  let fixture: ComponentFixture<AddCalculatedBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalculatedBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalculatedBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
