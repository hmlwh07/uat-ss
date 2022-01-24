import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourseDetailComponent } from './resourse-detail.component';

describe('ResourseDetailComponent', () => {
  let component: ResourseDetailComponent;
  let fixture: ComponentFixture<ResourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
