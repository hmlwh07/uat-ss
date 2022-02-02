import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../../app/modules/auth';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { HumanResourcesService } from '../human-resources.manage.service';



export class AboutBramDTO {
  id?: number;
  defaultValue?: string;
  question?: string;
  riskLevel?: any;
  outboundLogistics?: string;
  marketingSales?: string;
  service?: string;
}

const ELEMENT_DATA: AboutBramDTO[] = [
  {
    id: 0, defaultValue: '',
    question: "Not finding the right employees", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Lack of trained employees", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }]
  },
  {
    id: 0, defaultValue: '',
    question: "Unable to retain qualified trained employees", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Lack of employee productivity", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Lack of good compensation and benefits scheme", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Work related injuries", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Employee absenteeism", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  }
];

@Component({
  selector: 'app-human-resources-questionnaire',
  templateUrl: './human-resources-questionnaire.component.html',
  styleUrls: ['./human-resources-questionnaire.component.scss']
})
export class HumanResourcesQuestionnaireComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = ['question', 'riskLevel'];
  dataSource = ELEMENT_DATA;
  user: any;
  postRequest: { benefitScheme: string; createdAt: Date; createdBy: any; empAbsenteism: string; fnaId: any; id: any; lackBenefitsScheme: string; lackEmpProductivity: string; lackTrainedEmp: string; qualifiedTrainedEmp: string; relatedInjures: string; updatedAt: Date; updatedBy: any; };

  constructor(private cdf: ChangeDetectorRef, private authService: AuthService, private humanResourcesService: HumanResourcesService) {
    this.dataSource = ELEMENT_DATA.reduce((current, next) => {
      next.riskLevel.forEach(b => {
        current.push({
          id: next.id, defaultValue: next.defaultValue,
          question: next.question, noRisk: b.noRisk,
          lowRisk: b.lowRisk, somewhatRisky: b.somewhatRisky, risky: b.risky, highRisk: b.highRisk
        })
      });
      return current;
    }, []);

  }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.getAllHumanResourcesQuestionnaireByfnaId();
  }

  update(event, question, id) {
    this.postRequest = {
      benefitScheme: "",
      createdAt: new Date(),
      createdBy: this.user.id,
      empAbsenteism: "",
      fnaId: this.fnaId,
      id: id,
      lackBenefitsScheme: "",
      lackEmpProductivity: "",
      lackTrainedEmp: "",
      qualifiedTrainedEmp: "",
      relatedInjures: "",
      updatedAt: new Date,
      updatedBy: this.user.id
    }
    if (question == 'Not finding the right employees') {
      this.postRequest.benefitScheme = event.value;
    }
    if (question == 'Lack of trained employees') {
      this.postRequest.lackTrainedEmp = event.value;
    }
    if (question == 'Unable to retain qualified trained employees') {
      this.postRequest.qualifiedTrainedEmp = event.value;
    }
    if (question == 'Lack of employee productivity') {
      this.postRequest.lackEmpProductivity = event.value;
    }
    if (question == 'Lack of good compensation and benefits scheme') {
      this.postRequest.lackBenefitsScheme = event.value;
    }
    if (question == 'Work related injuries') {
      this.postRequest.relatedInjures = event.value;
    }
    if (question == 'Employee absenteeism') {
      this.postRequest.empAbsenteism = event.value;
    }
   
    if (this.postRequest.id == 0) {
      this.humanResourcesService.saveHumanResourcesQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        if (res) {
          this.postRequest.id = res;
          if (this.postRequest.benefitScheme) {
            ELEMENT_DATA[0].id = res;
          }
          if (this.postRequest.lackTrainedEmp) {
            ELEMENT_DATA[1].id = res;
          }
          if (this.postRequest.qualifiedTrainedEmp) {
            ELEMENT_DATA[2].id = res;
          }
          if (this.postRequest.lackEmpProductivity) {
            ELEMENT_DATA[3].id = res;
          }
          if (this.postRequest.lackBenefitsScheme) {
            ELEMENT_DATA[4].id = res;
          }
          if (this.postRequest.relatedInjures) {
            ELEMENT_DATA[5].id = res;
          }
          if (this.postRequest.empAbsenteism) {
            ELEMENT_DATA[6].id = res;
          }
        }
      })
    } else {
      this.humanResourcesService.updateHumanResourcesQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        if (res) {
          this.postRequest.id = res;
          if (this.postRequest.benefitScheme) {
            ELEMENT_DATA[0].id = res;
          }
          if (this.postRequest.lackTrainedEmp) {
            ELEMENT_DATA[1].id = res;
          }
          if (this.postRequest.qualifiedTrainedEmp) {
            ELEMENT_DATA[2].id = res;
          }
          if (this.postRequest.lackEmpProductivity) {
            ELEMENT_DATA[3].id = res;
          }
          if (this.postRequest.lackBenefitsScheme) {
            ELEMENT_DATA[4].id = res;
          }
          if (this.postRequest.relatedInjures) {
            ELEMENT_DATA[5].id = res;
          }
          if (this.postRequest.empAbsenteism) {
            ELEMENT_DATA[6].id = res;
          }
        }
      })
    }
  }

  async getAllHumanResourcesQuestionnaireByfnaId() {
    await this.humanResourcesService.getAllHumanResourcesQuestionnaireByfnaId(this.fnaId).toPromise().then(async (res: any) => {
       if (res) {
        this.postRequest = res;
        for (var j = 0; j < res.length; j++) {
          if (res[j].benefitScheme) {
            ELEMENT_DATA[0].id = res[j].id;
            ELEMENT_DATA[0].defaultValue = res[j].benefitScheme
          }
          if (res[j].lackTrainedEmp) {
            ELEMENT_DATA[1].id = res[j].id;
            ELEMENT_DATA[1].defaultValue = res[j].lackTrainedEmp
          }
          if (res[j].qualifiedTrainedEmp) {
            ELEMENT_DATA[2].id = res[j].id;
            ELEMENT_DATA[2].defaultValue = res[j].qualifiedTrainedEmp
          }
          if (res[j].lackEmpProductivity) {
            ELEMENT_DATA[3].id = res[j].id;
            ELEMENT_DATA[3].defaultValue = res[j].lackEmpProductivity
          }
          if (res[j].lackBenefitsScheme) {
            ELEMENT_DATA[4].id = res[j].id;
            ELEMENT_DATA[4].defaultValue = res[j].lackBenefitsScheme
          }
          if (res[j].relatedInjures) {
            ELEMENT_DATA[5].id = res[j].id;
            ELEMENT_DATA[5].defaultValue = res[j].relatedInjures
          }
          if (res[j].empAbsenteism) {
            ELEMENT_DATA[6].id = res[j].id;
            ELEMENT_DATA[6].defaultValue = res[j].empAbsenteism
          }
        }

        this.dataSource = ELEMENT_DATA.reduce((current, next) => {
          next.riskLevel.forEach(b => {
            current.push({
              id: next.id, defaultValue: next.defaultValue,
              question: next.question, noRisk: b.noRisk,
              lowRisk: b.lowRisk, somewhatRisky: b.somewhatRisky, risky: b.risky, highRisk: b.highRisk
            })
          });
          return current;
        }, []);

        this.cdf.detectChanges();
      }
    })
  }



}
