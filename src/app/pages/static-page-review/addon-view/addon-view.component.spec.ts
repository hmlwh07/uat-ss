import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonViewComponent } from './addon-view.component';

describe('AddonViewComponent', () => {
  let component: AddonViewComponent;
  let fixture: ComponentFixture<AddonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
