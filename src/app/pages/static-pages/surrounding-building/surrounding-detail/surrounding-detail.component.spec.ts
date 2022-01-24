import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundingDetailComponent } from './surrounding-detail.component';

describe('SurroundingDetailComponent', () => {
  let component: SurroundingDetailComponent;
  let fixture: ComponentFixture<SurroundingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurroundingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurroundingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
