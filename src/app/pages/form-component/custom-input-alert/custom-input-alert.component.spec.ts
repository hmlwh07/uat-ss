import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputAlertComponent } from './custom-input-alert.component';

describe('CustomInputAlertComponent', () => {
  let component: CustomInputAlertComponent;
  let fixture: ComponentFixture<CustomInputAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
