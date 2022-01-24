import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationOthersComponent } from './operation-others.component';

describe('OperationOthersComponent', () => {
  let component: OperationOthersComponent;
  let fixture: ComponentFixture<OperationOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationOthersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
