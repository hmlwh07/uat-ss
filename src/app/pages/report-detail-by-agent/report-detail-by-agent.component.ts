import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { CONSTANT_AGENT_REPORT_DATA, ReportIdentityType, ReportStatus } from './report-detail-by-agent.const';

@Component({
  selector: 'app-report-detail-by-agent',
  templateUrl: './report-detail-by-agent.component.html',
  styleUrls: ['./report-detail-by-agent.component.scss']
})
export class ReportDetailByAgentComponent implements OnInit {
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

  constructor(private cdf: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.loadForm();
    console.log('CONSTANT_AGENT_REPORT_DATA', CONSTANT_AGENT_REPORT_DATA);
    this.reports = CONSTANT_AGENT_REPORT_DATA
    for (var i = 0; i < this.reports.length; i++) {
      this.reports[i].productPolicies = [];
      for (var j = 0; j < this.reports[i].products.length; j++) {
        this.products.push(this.reports[i].products[j]);
      }

      for (var k = 0; k < this.reports[i].policies.length; k++) {
        this.policies.push(this.reports[i].policies[k]);
      }

    }

    console.log('before duplicate remove products', this.products);
    console.log('before duplicate remove policies', this.policies);

    let list = [];





    const uniqueObjects = [...new Map(this.products.map(item => [item.productCode, item])).values()];
    console.log('uniqueObjects', uniqueObjects);
    this.products = uniqueObjects;
    //this.products = CONSTANT_AGENT_REPORT_DATA[0].products;
    //this.policies = CONSTANT_AGENT_REPORT_DATA[0].policies;
    console.log('products', this.products);

    for (var j = 0; j < this.reports.length; j++) {
      this.reports[j].productPolicies = uniqueObjects
    }

    for (var i = 0; i < this.reports.length; i++) {
      for (var j = 0; j < this.reports[i].productPolicies.length; j++) {
        for (var k = 0; k < this.reports[i].policies.length; k++) {

        }
      }
      this.reports[j].productPolicies = uniqueObjects
    }

    console.log('reports ', this.reports);

  }

  async changeOptions(ev: null, type) {
    console.log('ev =====> ', ev);
    console.log('type =====> ', type);
    if (type == 'agent') {
      if (ev) {
        this.selectOptions.companies.push({ id: 1, companyName: 'companyName 1', agentId: 1 });
      } else {
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
        this.selectOptions.channels.push({ id: 1, channelName: 'channelName 1', companiesId: 1 });
      } else {
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
        this.selectOptions.regions.push({ id: 1, regionsName: 'regions 1', channelId: 1 });
      } else {
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
        this.selectOptions.cluster.push({ id: 1, clusterName: 'clusterName 1', regionId: 1 });
      } else {
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
        this.selectOptions.branches.push({ id: 1, brancheName: 'brancheName 1', clusterId: 1 });
      } else {
        this.selectOptions.branches = [];
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.branches = [...this.selectOptions.branches];
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



}
