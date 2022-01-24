import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBusinessComponent } from './location-business.component';

describe('LocationBusinessComponent', () => {
  let component: LocationBusinessComponent;
  let fixture: ComponentFixture<LocationBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
