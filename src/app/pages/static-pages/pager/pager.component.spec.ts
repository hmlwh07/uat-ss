import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPagerComponent } from './pager.component';

describe('SimplePageComponent', () => {
  let component: ListingsPagerComponent;
  let fixture: ComponentFixture<ListingsPagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsPagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
