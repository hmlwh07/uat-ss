import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLifeGripComponent } from './education-life-griph.component';

describe('EducationLifeGripComponent', () => {
  let component: EducationLifeGripComponent;
  let fixture: ComponentFixture<EducationLifeGripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLifeGripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLifeGripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
