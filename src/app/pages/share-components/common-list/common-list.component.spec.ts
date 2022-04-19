import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonListingComponent } from './common-list.component';

describe('CommonListingComponent', () => {
  let component: CommonListingComponent;
  let fixture: ComponentFixture<CommonListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
