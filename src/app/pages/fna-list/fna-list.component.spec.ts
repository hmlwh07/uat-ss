import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaListComponent } from './fna-list.component';

describe('FnaListComponent', () => {
  let component: FnaListComponent;
  let fixture: ComponentFixture<FnaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
