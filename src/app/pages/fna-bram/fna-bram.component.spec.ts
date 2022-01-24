import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnaBramComponent } from './fna-bram.component';

describe('FnaBramComponent', () => {
  let component: FnaBramComponent;
  let fixture: ComponentFixture<FnaBramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnaBramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnaBramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
