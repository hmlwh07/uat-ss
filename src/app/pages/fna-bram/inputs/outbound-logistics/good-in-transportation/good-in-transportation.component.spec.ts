import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInTransportationComponent } from './good-in-transportation.component';

describe('GoodInTransportationComponent', () => {
  let component: GoodInTransportationComponent;
  let fixture: ComponentFixture<GoodInTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodInTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodInTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
