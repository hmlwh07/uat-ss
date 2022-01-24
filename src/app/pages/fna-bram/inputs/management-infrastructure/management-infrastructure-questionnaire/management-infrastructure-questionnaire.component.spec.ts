import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementInfrastructureQuestionnaireComponent } from './management-infrastructure-questionnaire.component';

describe('ManagementInfrastructureQuestionnaireComponent', () => {
  let component: ManagementInfrastructureQuestionnaireComponent;
  let fixture: ComponentFixture<ManagementInfrastructureQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementInfrastructureQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementInfrastructureQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
