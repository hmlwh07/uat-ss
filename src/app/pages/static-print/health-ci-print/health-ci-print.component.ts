import { Component, Input, OnInit } from '@angular/core';
import { stream } from 'exceljs';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-health-ci-print',
  templateUrl: './health-ci-print.component.html',
  styleUrls: ['./health-ci-print.component.scss'],
})
export class HealthCiPrintComponent implements OnInit {
  @Input() resourcesId?: string;
  @Input() signId?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;

  policyHolder: any = {
    partyAddress: [],
  };
  detail: {
    startDate: Date;
    endDate: Date;
    policyDuration: number;
    policyType: string;
    currency: string;
  };
  address: {
    f_house_no: string;
    f_block_no: string;
    f_area_name: string;
    stateValue: string;
    districtValue: string;
    townshipValue: string;
  };

  riskDetails = [];
  beneficiaries = [];
  coverages = [];
  paymentSchedule = []

  constructor(private policyHolderService: PolicyHolderService) {}

  ngOnInit() {
    this.getPolicyHolder();
    this.getDetail();
    this.getRiskAddress();
    this.getRiskDetail();
    this.getBeneficiaries();
    this.getCoverages();
  }

  getPolicyHolder() {
    this.policyHolderService
      .getOne(this.resourcesId)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.policyHolder = res;
          console.log('policy', this.policyHolder);
        }
      });
  }

  getDetail() {
    this.detail = {
      startDate: null,
      endDate:null,
      policyDuration: null,
      policyType: '',
      currency: '',
    };

    // this.fireService.getOne(this.resourcesId).toPromise().then(res => {
    //   if (res)

    //     this.detail = res
    //   console.log("DEtail", this.detail);
    // })
  }

  getRiskAddress() {
    this.address = {
      f_house_no: 'No.1233',
      f_block_no: '15 Block',
      f_area_name: 'Tamwe',
      stateValue: 'Test',
      districtValue: 'District ',
      townshipValue: 'Township ',
    };
    // this.fireRiskAddressService.getOne(this.resourcesId).toPromise().then((res: any) => {
    //   if (res) {
    //     this.address = res
    //     console.log("adderss", this.address);
    //   }
    // })
  }

  getRiskDetail() {
    this.riskDetails.push(
    //   {
    //   name: 'Aung Aung',
    //   occupation: 'Father',
    //   gender: 'Male',
    //   id: '123',
    //   dateofBirth: '05/01/1991',
    //   fatherName: '1212',
    //   phoneNumber: '1212',
    // }
    );
  }

  getBeneficiaries() {
    this.beneficiaries.push(
      // {
      //   no: 1,
      //   name: 'Mg Mg',
      //   relationship: 'Father',
      //   id: '123',
      //   dateofBirth: '05/01/1991',
      //   share: '50',
      // },
      // {
      //   no: 2,
      //   name: 'Mya Mya',
      //   relationship: 'Father',
      //   id: '123',
      //   dateofBirth: '05/01/1995',
      //   share: '50',
      //}
    );
  }

  getCoverages() {
    this.coverages.push(
      // {
      //   no: 1,
      //   coverageName: 'Mg Mg',
      //   unit: 12
      // },
      // {
      //   no: 2,
      //   coverageName: 'Ma Ma',
      //   unit: 15
      // },
    );
  }

  getPaymentSchedule(){
    this.paymentSchedule.push(
      // {
      //   noofInstallment: 1,
      //   installmentPremium: 'Mg Mg',
      //   stampDuty: 12,
      //   totalPremium: 100
      // },
      // {
      //   noofInstallment: 2,
      //   installmentPremium: 'Mg Mg',
      //   stampDuty: 12,
      //   totalPremium: 100
      // },
    );
  }

  
}
