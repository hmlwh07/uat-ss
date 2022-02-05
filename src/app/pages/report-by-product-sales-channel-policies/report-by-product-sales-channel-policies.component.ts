import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportProductSalesChannelPoliciesExportService } from './report-by-product-sales-channel-policies-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-by-product-sales-channel-policies.const';

@Component({
  selector: 'app-report-by-product-sales-channel-policies',
  templateUrl: './report-by-product-sales-channel-policies.component.html',
  styleUrls: ['./report-by-product-sales-channel-policies.component.scss']
})
export class ReportByProductSalesChannelPoliciesComponent implements OnInit {
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

  constructor(private cdf: ChangeDetectorRef, 
    public exportService: ReportProductSalesChannelPoliciesExportService) { }  


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
  
  generateReportExcel() {
    console.log('generateReportExcel ', this.reports);
    this.productValues = []
    for (var i = 0; i < this.productList.length; i++) {
      this.productValues.push(this.productList[i].productName)
    }

    // Sub Header
    this.subHeader = ["No.", "Branch", "Channel", "Agent Name", "Agent No."];
    for (var i = 0; i < this.productList.length; i++) {
      this.subHeader.push("No of Policies");
      this.subHeader.push("Premium");
    }

    // Data
    for (var i = 0; i < this.reports.length; i++) {
      let list = [];
      list.push(i + 1, this.reports[i].branchName, this.reports[i].channelName, this.reports[i].agentName, this.reports[i].agentNo)
      for (var j = 0; j < this.reports[i].productPolicies.length; j++) {
        list.push(this.reports[i].productPolicies[j].noOfPolicies, this.reports[i].productPolicies[j].premium)
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
      title: 'Employee Sales Report - Jan 2020',
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
      subHeader: this.subHeader,
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
      "id": new FormControl(null),
      "fromDate": new FormControl(null),
      "toDate": new FormControl(null),
      "agentId": new FormControl(null),
      "companyId": new FormControl(null),
      "channelId": new FormControl(null),
      "regionId": new FormControl(null),
      "clusterId": new FormControl(null),
      "branchId": new FormControl(null)
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
    if (type == 'FromDate') {
      let value = this.createFormGroup.controls['fromDate'].value;
    }

    if (type == 'ToDate') {
      let value = this.createFormGroup.controls['toDate'].value;
    }
    console.log('doValid', this.createFormGroup.value.name);
  }

  clearDate(type) {
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue(null);
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue(null);
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
