import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePagePolicyComponent } from './simple-page-policy.component';

describe('SimplePagePolicyComponent', () => {
  let component: SimplePagePolicyComponent;
  let fixture: ComponentFixture<SimplePagePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePagePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePagePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
