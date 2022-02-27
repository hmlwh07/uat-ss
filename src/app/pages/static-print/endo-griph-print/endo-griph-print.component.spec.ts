import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoGripViewComponent } from './endo-griph-view.component';

describe('EducationLifeGripComponent', () => {
  let component: EndoGripViewComponent;
  let fixture: ComponentFixture<EndoGripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndoGripViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoGripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
