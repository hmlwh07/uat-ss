import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaDetailComponent } from './fna-detail.component';

describe('FnaDetailComponent', () => {
  let component: FnaDetailComponent;
  let fixture: ComponentFixture<FnaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
