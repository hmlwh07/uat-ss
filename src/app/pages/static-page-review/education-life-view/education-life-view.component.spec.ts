import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLifeViewComponent } from './education-life-view.component';

describe('EducationLifeComponent', () => {
  let component: EducationLifeViewComponent;
  let fixture: ComponentFixture<EducationLifeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLifeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLifeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
