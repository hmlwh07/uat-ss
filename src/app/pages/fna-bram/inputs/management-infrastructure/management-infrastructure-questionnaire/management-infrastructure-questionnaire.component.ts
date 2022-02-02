import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../../app/modules/auth';
import { MaterialTableViewComponent } from '../../../../../../app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { ManagementInfrastructureService } from '../management-infrastructure.manage.service';

export class AboutBramDTO {
  id?: number;
  question?: string;
  riskLevel?: any;
  defaultValue?: string;
  outboundLogistics?: string;
  marketingSales?: string;
  service?: string;
}

const ELEMENT_DATA: AboutBramDTO[] = [
  {
    id: 0,
    question: "Not able to access business(factory) location", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: 'Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0,
    question: "Not able to access business(showroom) location", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }]
  },
  {
    id: 0,
    question: "Key management team unavailability", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0,
    question: "Loss of business licenses and permits", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0,
    question: "Damaged business image/good will", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0,
    question: "Loss of cash", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  },
  {
    id: 0,
    question: "Burglary", defaultValue: '', riskLevel: [
      { noRisk: 'No Risk', lowRisk: 'Low Risk', somewhatRisky: ' Somewhat Risky', risky: 'Risky', highRisk: 'High Risk' }
    ]
  }
];

@Component({
  selector: 'app-management-infrastructure-questionnaire',
  templateUrl: './management-infrastructure-questionnaire.component.html',
  styleUrls: ['./management-infrastructure-questionnaire.component.scss']
})
export class ManagementInfrastructureQuestionnaireComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent;
  @Input() menuType: any = null;
  @Input() fnaId: any = null;

  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();
  displayedColumns: string[] = ['question', 'riskLevel'];
  dataSource = ELEMENT_DATA;
  user: any;
  postRequest: { burglary: string; createdAt: Date; createdBy: number; damageBusiness: string; factoryLocation: string; fnaId: any; id: number; lossOfBusiness: string; lossOfCash: string; showRoomLocation: string; teamUnavailability: string; updatedAt: Date; updatedBy: any; };

  constructor(private cdf: ChangeDetectorRef, private managementInfrastructureService: ManagementInfrastructureService,
    private authService: AuthService) {

    this.dataSource = ELEMENT_DATA.reduce((current, next) => {
      next.riskLevel.forEach(b => {
        current.push({
          id: next.id,
          question: next.question, noRisk: b.noRisk,
          lowRisk: b.lowRisk, somewhatRisky: b.somewhatRisky, risky: b.risky, highRisk: b.highRisk
        })
      });
      return current;
    }, []);

  }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.getAllManagemenQuestionnaireByfnaId();
  }

  update(event, question, id) {
    this.postRequest = {
      burglary: "",
      createdAt: new Date(),
      createdBy: this.user.id,
      damageBusiness: "",
      factoryLocation: "",
      fnaId: this.fnaId,
      id: id,
      lossOfBusiness: "",
      lossOfCash: "",
      showRoomLocation: "",
      teamUnavailability: "",
      updatedAt: new Date(),
      updatedBy: this.user.id
    }
    if (question == 'Not able to access business(factory) location') {
      this.postRequest.factoryLocation = event.value;
    }
    if (question == 'Not able to access business(showroom) location') {
      this.postRequest.showRoomLocation = event.value;
    }
    if (question == 'Key management team unavailability') {
      this.postRequest.teamUnavailability = event.value;
    }
    if (question == 'Loss of business licenses and permits') {
      this.postRequest.lossOfBusiness = event.value;
    }
    if (question == 'Damaged business image/good will') {
      this.postRequest.damageBusiness = event.value;
    }
    if (question == 'Loss of cash') {
      this.postRequest.lossOfCash = event.value;
    }
    if (question == 'Burglary') {
      this.postRequest.burglary = event.value;
    }

    if (this.postRequest.id == 0) {
      this.managementInfrastructureService.saveManagementQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        if (res) {
          this.postRequest.id = res;
          if (this.postRequest.factoryLocation) {
            ELEMENT_DATA[0].id = res;
          }
          if (this.postRequest.showRoomLocation) {
            ELEMENT_DATA[1].id = res;
          }
          if (this.postRequest.teamUnavailability) {
            ELEMENT_DATA[2].id = res;
          }
          if (this.postRequest.lossOfBusiness) {
            ELEMENT_DATA[3].id = res;
          }
          if (this.postRequest.damageBusiness) {
            ELEMENT_DATA[4].id = res;
          }
          if (this.postRequest.lossOfCash) {
            ELEMENT_DATA[5].id = res;
          }
          if (this.postRequest.burglary) {
            ELEMENT_DATA[6].id = res;
          }
        }
      })
    } else {
      this.managementInfrastructureService.updateManagementQuestionnaire(this.postRequest).toPromise().then(async (res: any) => {
        if (res) {
          this.postRequest.id = res;
          if (this.postRequest.factoryLocation) {
            ELEMENT_DATA[0].id = res;
          }
          if (this.postRequest.showRoomLocation) {
            ELEMENT_DATA[1].id = res;
          }
          if (this.postRequest.teamUnavailability) {
            ELEMENT_DATA[2].id = res;
          }
          if (this.postRequest.lossOfBusiness) {
            ELEMENT_DATA[3].id = res;
          }
          if (this.postRequest.damageBusiness) {
            ELEMENT_DATA[4].id = res;
          }
          if (this.postRequest.lossOfCash) {
            ELEMENT_DATA[5].id = res;
          }
          if (this.postRequest.burglary) {
            ELEMENT_DATA[6].id = res;
          }
        }
      })
    }
  }

  async getAllManagemenQuestionnaireByfnaId() {
    await this.managementInfrastructureService.getAllManagemenQuestionnaireByfnaId(this.fnaId).toPromise().then(async (res: any) => {
      if (res) {
        for (var j = 0; j < res.length; j++) {
          if (res[j].factoryLocation) {
            ELEMENT_DATA[0].id = res[j].id;
            ELEMENT_DATA[0].defaultValue = res[j].factoryLocation
          }
          if (res[j].showRoomLocation) {
            ELEMENT_DATA[1].id = res[j].id;
            ELEMENT_DATA[1].defaultValue = res[j].showRoomLocation
          }
          if (res[j].teamUnavailability) {
            ELEMENT_DATA[2].id = res[j].id;
            ELEMENT_DATA[2].defaultValue = res[j].teamUnavailability
          }
          if (res[j].lossOfBusiness) {
            ELEMENT_DATA[3].id = res[j].id;
            ELEMENT_DATA[3].defaultValue = res[j].lossOfBusiness
          }
          if (res[j].damageBusiness) {
            ELEMENT_DATA[4].id = res[j].id;
            ELEMENT_DATA[4].defaultValue = res[j].damageBusiness
          }
          if (res[j].lossOfCash) {
            ELEMENT_DATA[5].id = res[j].id;
            ELEMENT_DATA[5].defaultValue = res[j].lossOfCash
          }
          if (res[j].burglary) {
            ELEMENT_DATA[6].id = res[j].id;
            ELEMENT_DATA[6].defaultValue = res[j].burglary
          }
        }

        this.dataSource = ELEMENT_DATA.reduce((current, next) => {
          next.riskLevel.forEach(b => {
            current.push({
              id: next.id,
              question: next.question, defaultValue: next.defaultValue, noRisk: b.noRisk,
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
