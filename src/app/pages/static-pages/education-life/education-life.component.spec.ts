import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLifeComponent } from './education-life.component';

describe('EducationLifeComponent', () => {
  let component: EducationLifeComponent;
  let fixture: ComponentFixture<EducationLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
