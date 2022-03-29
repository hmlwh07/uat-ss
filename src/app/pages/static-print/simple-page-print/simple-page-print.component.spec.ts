import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePageViewComponent } from './simple-page-print.component';

describe('SimplePageViewComponent', () => {
  let component: SimplePageViewComponent;
  let fixture: ComponentFixture<SimplePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
