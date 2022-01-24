import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLifeGripViewComponent } from './education-life-griph-view.component';

describe('EducationLifeGripComponent', () => {
  let component: EducationLifeGripViewComponent;
  let fixture: ComponentFixture<EducationLifeGripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLifeGripViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLifeGripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
