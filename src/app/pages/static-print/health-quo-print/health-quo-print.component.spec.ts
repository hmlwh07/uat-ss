import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuoViewComponent } from './health-quo-print.component';

describe('HealthQuoComponent', () => {
  let component: HealthQuoViewComponent;
  let fixture: ComponentFixture<HealthQuoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthQuoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
