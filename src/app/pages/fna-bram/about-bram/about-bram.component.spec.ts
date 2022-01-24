import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBramComponent } from './about-bram.component';

describe('AboutBramComponent', () => {
  let component: AboutBramComponent;
  let fixture: ComponentFixture<AboutBramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
