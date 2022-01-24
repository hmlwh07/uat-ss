import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOthersComponent } from './service-others.component';

describe('ServiceOthersComponent', () => {
  let component: ServiceOthersComponent;
  let fixture: ComponentFixture<ServiceOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
