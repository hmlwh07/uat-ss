import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaDataViewComponent } from './fna-data-view.component';

describe('FnaDataViewComponent', () => {
  let component: FnaDataViewComponent;
  let fixture: ComponentFixture<FnaDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
