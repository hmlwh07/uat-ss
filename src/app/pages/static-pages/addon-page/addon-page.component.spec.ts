import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonPageComponent } from './addon-page.component';

describe('AddonPageComponent', () => {
  let component: AddonPageComponent;
  let fixture: ComponentFixture<AddonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
