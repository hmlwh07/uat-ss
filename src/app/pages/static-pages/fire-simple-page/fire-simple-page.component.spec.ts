import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePageComponent } from './fire-simple-page.component';

describe('SimplePageComponent', () => {
  let component: SimplePageComponent;
  let fixture: ComponentFixture<SimplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
