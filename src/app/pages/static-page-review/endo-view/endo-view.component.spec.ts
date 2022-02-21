import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoViewComponent } from './endo-view.component';

describe('EducationLifeComponent', () => {
  let component: EndoViewComponent;
  let fixture: ComponentFixture<EndoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
