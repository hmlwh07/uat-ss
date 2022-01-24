import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixAssetManagementComponent } from './fix-asset-management.component';

describe('FixAssetManagementComponent', () => {
  let component: FixAssetManagementComponent;
  let fixture: ComponentFixture<FixAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixAssetManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
