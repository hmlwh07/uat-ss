import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuoComponent } from './health-quo.component';

describe('HealthQuoComponent', () => {
  let component: HealthQuoComponent;
  let fixture: ComponentFixture<HealthQuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthQuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
