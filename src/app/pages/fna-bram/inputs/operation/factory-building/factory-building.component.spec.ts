import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryBuildingComponent } from './factory-building.component';

describe('FactoryBuildingComponent', () => {
  let component: FactoryBuildingComponent;
  let fixture: ComponentFixture<FactoryBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
