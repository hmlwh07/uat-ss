import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../modules/auth';
import { MaterialTableViewComponent } from '../../../../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { TechnologyService } from '../technology.manage.service';
import { UserModel } from '../../../../../modules/auth/_models/user.model'

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
    question: "Customer Data Storage", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "IT equipment loss", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }]
  },
  {
    id: 0, defaultValue: '',
    question: "Employee capability", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0, defaultValue: '',
    question: "Business disruption caused by technology issue", riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  }
];

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() fnaId: any = null;
  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();

  displayedColumns: string[] = ['question', 'riskLevel'];
  dataSource = ELEMENT_DATA;
  user: UserModel = new UserModel();
  postRequest: { createdAt: Date; createdBy: number; customerDataStorage: string; employeeCapability: string; fnaId: any; id: number; itEquipmentLoss: string; techIssue: string; updatedAt: Date; updatedBy: number; };

  constructor(private cdf: ChangeDetectorRef, private authService: AuthService, private technologyService: TechnologyService) {
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
    this.getAllTechnologyQuestionnaireByfnaId();
  }

  async update(event, question, id) {
    console.log('update', event.value, question);
    this.postRequest = {
      createdAt: new Date(),
      createdBy: this.user.id,
      customerDataStorage: "",
      employeeCapability: "",
      fnaId: this.fnaId,
      id: id,
      itEquipmentLoss: "",
      techIssue: "",
      updatedAt: new Date(),
      updatedBy: this.user.id
    }
    if (question == 'Customer Data Storage') {
      this.postRequest.customerDataStorage = event.value;
    }
    if (question == 'IT equipment loss') {
      this.postRequest.itEquipmentLoss = event.value;
    }
    if (question == 'Employee capability') {
      this.postRequest.employeeCapability = event.value;
    }
    if (question == 'Business disruption caused by technology issue') {
      this.postRequest.techIssue = event.value;
    }
    console.log('postRequest', this.postRequest);
    if (this.postRequest.id == 0) {
      await this.technologyService.saveTechnologyQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        console.log('response', res);
        if (res) {
          this.postRequest.id = res;
          for (var j = 0; j < res.length; j++) {
            if (res[j].customerDataStorage) {
              ELEMENT_DATA[0].id = res[j].id;
              ELEMENT_DATA[0].defaultValue = res[j].customerDataStorage
            }
            if (res[j].itEquipmentLoss) {
              ELEMENT_DATA[1].id = res[j].id;
              ELEMENT_DATA[1].defaultValue = res[j].itEquipmentLoss
            }
            if (res[j].employeeCapability) {
              ELEMENT_DATA[2].id = res[j].id;
              ELEMENT_DATA[2].defaultValue = res[j].employeeCapability
            }
            if (res[j].techIssue) {
              ELEMENT_DATA[3].id = res[j].id;
              ELEMENT_DATA[3].defaultValue = res[j].techIssue
            }
          }
        }
      })
    } else {
      await this.technologyService.updateTechnologyQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        if (res) {
          this.postRequest.id = res;
          for (var j = 0; j < res.length; j++) {
            if (res[j].customerDataStorage) {
              ELEMENT_DATA[0].id = res[j].id;
              ELEMENT_DATA[0].defaultValue = res[j].customerDataStorage
            }
            if (res[j].itEquipmentLoss) {
              ELEMENT_DATA[1].id = res[j].id;
              ELEMENT_DATA[1].defaultValue = res[j].itEquipmentLoss
            }
            if (res[j].employeeCapability) {
              ELEMENT_DATA[2].id = res[j].id;
              ELEMENT_DATA[2].defaultValue = res[j].employeeCapability
            }
            if (res[j].techIssue) {
              ELEMENT_DATA[3].id = res[j].id;
              ELEMENT_DATA[3].defaultValue = res[j].techIssue
            }
          }
        }
      })
    }
  }

  async getAllTechnologyQuestionnaireByfnaId() {
    await this.technologyService.getAllTechnologyQuestionnaireByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      console.log('getAllTechnologyQuestionnaireByfnaId', res);
      if (res) {
        this.postRequest = res;
        for (var j = 0; j < res.length; j++) {
          if (res[j].customerDataStorage) {
            ELEMENT_DATA[0].id = res[j].id;
            ELEMENT_DATA[0].defaultValue = res[j].customerDataStorage
          }
          if (res[j].itEquipmentLoss) {
            ELEMENT_DATA[1].id = res[j].id;
            ELEMENT_DATA[1].defaultValue = res[j].itEquipmentLoss
          }
          if (res[j].employeeCapability) {
            ELEMENT_DATA[2].id = res[j].id;
            ELEMENT_DATA[2].defaultValue = res[j].employeeCapability
          }
          if (res[j].techIssue) {
            ELEMENT_DATA[3].id = res[j].id;
            ELEMENT_DATA[3].defaultValue = res[j].techIssue
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


