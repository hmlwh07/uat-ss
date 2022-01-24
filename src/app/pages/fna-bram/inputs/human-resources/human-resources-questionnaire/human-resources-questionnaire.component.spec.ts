import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesQuestionnaireComponent } from './human-resources-questionnaire.component';

describe('HumanResourcesQuestionnaireComponent', () => {
  let component: HumanResourcesQuestionnaireComponent;
  let fixture: ComponentFixture<HumanResourcesQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourcesQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
