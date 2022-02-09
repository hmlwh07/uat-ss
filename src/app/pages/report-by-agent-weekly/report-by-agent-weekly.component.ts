import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportAgentWeeklyExportService } from './report-by-agent-weekly-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-by-agent-weekly.const';

@Component({
  selector: 'app-report-by-agent-weekly',
  templateUrl: './report-by-agent-weekly.component.html',
  styleUrls: ['./report-by-agent-weekly.component.scss']
})
export class ReportByAgentWeeklyComponent implements OnInit {
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
  branchDataList = [];
  dataList = [];
  branchDataForExcel = [];
  title: string = 'Weekly Activity Report';
  productsSubHeader = [];

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportAgentWeeklyExportService) { }


  ngOnInit(): void {
    this.loadForm();
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

  async getAllReports() {
    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      this.productsHeader = [];
      this.branchDataList = [];
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        console.log('policyProductBranch', res);
        if (res) {
          if (res.headerColumnList.length > 0) {
            this.isData = true;
            for (var i = 0; i < res.headerColumnList.length; i++) {
              let date: string = i + '/12/2022';
              this.productsHeader.push({ name: date })
            }
          }

          if (res.headerColumnList.length > 0) {
            this.isData = true;
            this.productsSubHeader.push({ name: 'Agent Name' });
            this.productsSubHeader.push({ name: 'Agent Branch' });
            this.productsSubHeader.push({ name: 'Actvities' });
            this.productsSubHeader.push({ name: 'Target' });
            let count: number = 0;
            for (var i = 0; i < res.headerColumnList.length; i++) {
              count++;
              let week: string = 'W' + count;
              this.productsSubHeader.push({ name: week })
            }
          }

          if (res.dataList.length > 0) {
            this.isData = true;
            this.dataList = res.dataList;
            for (var i = 0; i < this.dataList.length; i++) {
              this.dataList[i].productDataList = [];
              for (var j = 0; j < this.productsHeader.length; j++) {
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
            console.log('dataList', this.dataList);
          }
        }
      });

      console.log('productsHeader', this.productsHeader);
      console.log('productsSubHeader', this.productsSubHeader);
    }
    this.cdf.detectChanges();
  }

  generateReportExcel() {
    this.productValues = []
    this.branchDataForExcel = [];
    for (var i = 0; i < this.productsHeader.length; i++) {
      this.productValues.push(this.productsHeader[i].name)
    }

    // Data For Excel
    let countSrNo: number = 0;
    for (var i = 0; i < this.dataList.length; i++) {
      countSrNo += 1;
      this.branchDataForExcel.push([countSrNo, this.dataList[i].month])
    }

    let fromDate = null;
    let toDate = null;
    if (this.createFormGroup.value.fromDate) {
      fromDate = this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)
    }
    if (this.createFormGroup.value.toDate) {
      toDate = this.formatDateDDMMYYY(this.createFormGroup.value.toDate)
    }

    let reportData = {
      title: this.title + ' ' + 'Report',
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
      productsHeader: this.productValues,
      branchDataForExcel: this.branchDataForExcel,
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
    console.log('ev =====> ', ev);
    console.log('type =====> ', type);
    if (type == 'agent') {
      if (ev) {
        this.agentName = ev.agentName
        this.selectOptions.companies.push({ id: 1, companyName: 'companyName 1', agentId: 1 });
      } else {
        this.companyName = null;
        this.selectOptions.companies = [];
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['companyId'].setValue(null);
        this.createFormGroup.controls['channelId'].setValue(null);
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.companies = [...this.selectOptions.companies];
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'company') {
      if (ev) {
        this.companyName = ev.companyName
        this.selectOptions.channels.push({ id: 1, channelName: 'channelName 1', companiesId: 1 });
      } else {
        this.companyName = null;
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['channelId'].setValue(null);
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'channel') {
      if (ev) {
        this.channelName = ev.channelName
        this.selectOptions.regions.push({ id: 1, regionsName: 'regions 1', channelId: 1 });
      } else {
        this.channelName = null;
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'region') {
      if (ev) {
        this.regionName = ev.regionsName
        this.selectOptions.cluster.push({ id: 1, clusterName: 'clusterName 1', regionId: 1 });
      } else {
        this.regionName = null
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'cluster') {
      if (ev) {
        this.clusterName = ev.clusterName
        this.selectOptions.branches.push({ id: 1, brancheName: 'brancheName 1', clusterId: 1 });
      } else {
        this.clusterName = null
        this.selectOptions.branches = [];
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.branches = [...this.selectOptions.branches];
    }
    if (type == 'branch') {
      if (ev) {
        this.branchName = ev.brancheName
      } else {
        this.branchName = null;
      }

    }


    this.cdf.detectChanges()

    console.log('selectOptions', this.selectOptions)
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
