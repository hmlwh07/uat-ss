import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaTypeComponent } from './fna-type.component';

describe('FnaTypeComponent', () => {
  let component: FnaTypeComponent;
  let fixture: ComponentFixture<FnaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
