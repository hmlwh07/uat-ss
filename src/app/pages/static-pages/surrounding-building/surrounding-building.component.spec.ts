import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundingBuildingComponent } from './surrounding-building.component';

describe('SurroundingBuildingComponent', () => {
  let component: SurroundingBuildingComponent;
  let fixture: ComponentFixture<SurroundingBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurroundingBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurroundingBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
