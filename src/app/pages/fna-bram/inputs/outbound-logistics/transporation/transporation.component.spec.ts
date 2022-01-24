import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporationComponent } from './transporation.component';

describe('TransporationComponent', () => {
  let component: TransporationComponent;
  let fixture: ComponentFixture<TransporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
