import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportAgentMonthlyExportService } from './report-by-agent-monthly-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-by-agent-monthly.const';

@Component({
  selector: 'app-report-by-agent-monthly',
  templateUrl: './report-by-agent-monthly.component.html',
  styleUrls: ['./report-by-agent-monthly.component.scss']
})
export class ReportByAgentMonthlyComponent implements OnInit {
  createFormGroup: FormGroup;
  fromMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  fromMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  toMaxDate: { year: number; month: number; day: number; };
  selectOptions = {
    agents: [{ id: 1, agentName: 'Agent 1' }, { id: 2, agentName: 'Agent 2' }],
    companies: [],
    channels: [],
    regions: [],
    cluster: [],
    branches: []
  }

  reports = [];
  products = [];
  policies = [];
  productList = [];

  agentName: string = null;
  companyName: string = null;
  channelName: string = null;
  regionName: string = null;
  clusterName: string = null;
  branchName: string = null;

  productValues = [];
  subHeader = [];
  dataExcel = [];
  isData: boolean = false;
  productsHeader = [];
  dataList = [];
  title: string = 'Monthly Activity Report';
  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportAgentMonthlyExportService) { }


  ngOnInit(): void {
    this.loadForm();
    this.getOfficeHirearchy();
    console.log('CONSTANT_AGENT_REPORT_DATA', CONSTANT_AGENT_REPORT_DATA);
    this.reports = CONSTANT_AGENT_REPORT_DATA
    for (var i = 0; i < this.reports.length; i++) {
      this.reports[i].productPolicies = [];
      this.reports[i].id = i
      for (var j = 0; j < this.reports[i].products.length; j++) {
        this.reports[i].products[j].id = i
        this.reports[i].products[j].noOfPolicies = null;
        this.reports[i].products[j].premium = null;
        this.products.push(this.reports[i].products[j]);
      }

      for (var k = 0; k < this.reports[i].policies.length; k++) {
        this.reports[i].policies[k].id = i
        this.policies.push(this.reports[i].policies[k]);
      }
    }

    this.productList = [...new Map(this.products.map(item => [item.productCode, item])).values()];
    console.log('productList ', this.productList);

    for (var i = 0; i < this.reports.length; i++) {
      this.reports[i].productPolicies = JSON.parse(JSON.stringify(this.productList))
    }

    for (var i = 0; i < this.reports.length; i++) {
      for (var j = 0; j < this.reports[i].productPolicies.length; j++) {
        for (var k = 0; k < this.reports[i].policies.length; k++) {
          if (this.reports[i].productPolicies[j].productCode == this.reports[i].policies[k].productCode) {
            this.reports[i].productPolicies[j].noOfPolicies = this.mathRoundTo(this.reports[i].policies[k].noOfPolicies, 2)
            this.reports[i].productPolicies[j].premium = this.mathRoundTo(this.reports[i].policies[k].premium, 2)
          }
        }
      }
    }

    console.log('report ', this.reports);

  }

  async getOfficeHirearchy() {
    await this.exportService.getOfficeHirearchy('', '01').toPromise().then(async (res: any) => {
      if (res) {
        this.selectOptions.companies = res
      }
    });
  }

  async getAllReports() {
    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      // await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
      let res =
      {
        "dataList": [
          {
            "activitiesName": "string",
            "agentName": "string",
            "branchName": "string",
            "targetName": "123",
            "dynamicList": [
              {
                "dailyValue": "string",
                "headerDate": "string",
                "headerDateName": "string",
                "headerMonthName": "string",
                "headerWeekName": "string",
                "headerWeekRange": "string",
                "monthlyValue": "string",
                "targetValue": "string",
                "weeklyValue": "string"
              },
              {
                "dailyValue": "string",
                "headerDate": "string",
                "headerDateName": "string",
                "headerMonthName": "string",
                "headerWeekName": "string",
                "headerWeekRange": "string",
                "monthlyValue": "string",
                "targetValue": "string",
                "weeklyValue": "string"
              }
            ]
          }
        ],
        "headerColumnList": [
          {
            "headerDate": "string",
            "headerDateName": "string",
            "headerMonthName": "string",
            "headerWeekName": "string",
            "headerWeekRange": "string"
          }
        ]
      }


      if (res.headerColumnList.length > 0) {
        this.isData = true;
        this.productsHeader.push({ name: 'Agent Name' });
        this.productsHeader.push({ name: 'Agent Branch' });
        this.productsHeader.push({ name: 'Actvities' });
        this.productsHeader.push({ name: 'Target' });
        let count: number = 0;
        for (var i = 0; i < res.headerColumnList.length; i++) {
          count++;
          let week: string = 'JAN' + count;
          this.productsHeader.push({ name: week })
        }
      }

      if (res.dataList.length > 0) {
        this.isData = true;
        this.dataList = res.dataList;
        for (var i = 0; i < this.dataList.length; i++) {
          this.dataList[i].productDataList = [];
          for (var j = 0; j < this.productsHeader.length - 4; j++) {
            this.dataList[i].productDataList.push({ value: null });
          }
          // if (this.dataList[i].dynamicList) {
          //   for (var j = 0; j < this.dataList[i].dynamicList.length; j++) {
          //     for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
          //       if (this.dataList[i].productDataList[k].id == this.dataList[i].products[j].id) {
          //         this.dataList[i].productDataList[k].noOfPolicy = this.dataList[i].products[j].noOfPolicy
          //         this.dataList[i].productDataList[k].totalPreminum = this.dataList[i].products[j].totalPreminum
          //       }
          //     }
          //   }
          // }
        }

      }
      // });
    }
    this.cdf.detectChanges();
  }

  generateReportExcel() {
    console.log('generateReportExcel ', this.reports);
    this.productValues = []
    for (var i = 0; i < this.productsHeader.length; i++) {
      this.productValues.push(this.productsHeader[i].name)
    }

    // Data
    for (var i = 0; i < this.dataList.length; i++) {
      let list = [];
      list.push(this.dataList[i].agentName, this.dataList[i].branchName,
        this.dataList[i].activitiesName, this.dataList[i].targetName)
      for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
        list.push(this.dataList[i].productDataList[j].value)
      }
      this.dataExcel.push(list)
    }

    let fromDate = null;
    let toDate = null;
    if (this.createFormGroup.value.fromDate) {
      fromDate = this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)
    }
    if (this.createFormGroup.value.fromDate) {
      toDate = this.formatDateDDMMYYY(this.createFormGroup.value.toDate)
    }

    let reportData = {
      title: this.title,
      searchValue: [
        { fromDate: fromDate },
        { toDate: toDate },
        { agentName: this.agentName },
        { companyName: this.companyName },
        { channelName: this.channelName },
        { regionName: this.regionName },
        { clusterName: this.clusterName },
        { branchName: this.branchName }
      ],
      products: this.productValues,
      data: this.dataExcel
    }
    this.exportService.exportExcel(reportData);
  }

  cancelReport() {
    this.createFormGroup.reset();
    this.selectOptions.companies = [];
    this.selectOptions.channels = [];
    this.selectOptions.regions = [];
    this.selectOptions.cluster = [];
    this.selectOptions.branches = [];
    this.agentName = null;
    this.companyName = null;
    this.channelName = null;
    this.regionName = null;
    this.clusterName = null;
    this.branchName = null;
  }


  async changeOptions(ev, type) {
    if (type == 'company') {
      if (ev) {
        this.companyName = ev.name
        await this.exportService.getOfficeHirearchy('', '01').toPromise().then(async (res: any) => {
          console.log('officeHirearchy', res);
          if (res) {
            this.selectOptions.channels = res
          }
        });
      } else {
        this.companyName = null;
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.selectOptions.agents = [];
        this.createFormGroup.controls['channelId'].setValue('');
        this.createFormGroup.controls['regionId'].setValue('');
        this.createFormGroup.controls['clusterId'].setValue('');
        this.createFormGroup.controls['branchId'].setValue('');
        this.createFormGroup.controls['agentId'].setValue('');
      }
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'channel') {
      this.selectOptions.channels = [];
      this.selectOptions.regions = [];
      this.selectOptions.cluster = [];
      this.selectOptions.branches = [];
      this.selectOptions.agents = [];
      this.createFormGroup.controls['channelId'].setValue('');
      this.createFormGroup.controls['regionId'].setValue('');
      this.createFormGroup.controls['clusterId'].setValue('');
      this.createFormGroup.controls['branchId'].setValue('');
      this.createFormGroup.controls['agentId'].setValue('');
      if (ev) {
        this.companyName = ev.name;
        await this.exportService.getOfficeHirearchy(ev.id, '02').toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.channels = res
          }
        });
      } else {
        this.channelName = null;
      }
    }

    if (type == 'region') {
      this.selectOptions.regions = [];
      this.selectOptions.cluster = [];
      this.selectOptions.branches = [];
      this.selectOptions.agents = [];
      this.createFormGroup.controls['regionId'].setValue('');
      this.createFormGroup.controls['clusterId'].setValue('');
      this.createFormGroup.controls['branchId'].setValue('');
      this.createFormGroup.controls['agentId'].setValue('');
      if (ev) {
        this.channelName = ev.name;
        await this.exportService.getOfficeHirearchy(ev.id, '03').toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.regions = res
          }
        });
      } else {
        this.regionName = null
      }

    }

    if (type == 'cluster') {
      this.selectOptions.cluster = [];
      this.selectOptions.branches = [];
      this.selectOptions.agents = [];
      this.createFormGroup.controls['clusterId'].setValue('');
      this.createFormGroup.controls['branchId'].setValue('');
      this.createFormGroup.controls['agentId'].setValue('');
      if (ev) {
        this.regionName = ev.name
        await this.exportService.getOfficeHirearchy(ev.id, '04').toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.cluster = res
          }
        });
      } else {
        this.clusterName = null
      }
    }
    if (type == 'branch') {
      this.selectOptions.branches = [];
      this.selectOptions.agents = [];
      this.createFormGroup.controls['branchId'].setValue('');
      this.createFormGroup.controls['agentId'].setValue('');
      if (ev) {
        this.clusterName = ev.name;
        await this.exportService.getOfficeHirearchy(ev.id, '05').toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.branches = res
          }
        });
      } else {
        this.branchName = null;
      }
    }

    if (type == 'agent') {
      if (ev) {
        this.branchName = ev.name
        await this.exportService.getAgentOffice(11).toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.agents = res
          }
        });
      } else {
        this.agentName = null;
        this.selectOptions.agents = [];
        this.createFormGroup.controls['agentId'].setValue('');
      }
    }

    console.log('type', type);
    console.log('ev', ev);

    if (type == 'office') {
      if (ev) {
        this.agentName = ev.agentName
      }
    }


    this.cdf.detectChanges()


  }

  loadForm() {
    this.createFormGroup = new FormGroup({
      "fromDate": new FormControl('', [Validators.required, Validators.nullValidator]),
      "toDate": new FormControl('', [Validators.required, Validators.nullValidator]),
      "agentId": new FormControl(''),
      "companyId": new FormControl(''),
      "channelId": new FormControl(''),
      "regionId": new FormControl(''),
      "clusterId": new FormControl(''),
      "branchId": new FormControl('')
    });
  }

  isControlValid(controlName: string): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  doValid(type) {
    this.getAllReports();
  }

  clearDate(type) {
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue('');
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue('');
    }
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }

  mathRoundTo(num: number, places: number) {
    const factor = 10 ** places;
    return (Math.round(num * factor) / factor).toLocaleString();
  };



}
