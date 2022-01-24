import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailComponent } from './risk-detail.component';

describe('SurroundingDetailComponent', () => {
  let component: RiskDetailComponent;
  let fixture: ComponentFixture<RiskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
