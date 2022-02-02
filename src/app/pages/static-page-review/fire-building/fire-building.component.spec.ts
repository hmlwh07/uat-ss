import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBuildingComponent } from './fire-building.component';

describe('FireBuildingComponent', () => {
  let component: FireBuildingComponent;
  let fixture: ComponentFixture<FireBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
