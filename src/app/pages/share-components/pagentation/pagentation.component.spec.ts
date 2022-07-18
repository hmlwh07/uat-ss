import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagentationComponent } from './pagentation.component';

describe('PagentationComponent', () => {
  let component: PagentationComponent;
  let fixture: ComponentFixture<PagentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
