import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
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
  productsHeader = [];
  branchDataList = [];
  isData: boolean = false;
  branchDataForExcel = [];
  title: string = "Product Sales Channel Policies";
  dataList: any;

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportProductSalesChannelPoliciesExportService) { }


  ngOnInit(): void {
    this.loadForm();
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
          if (res.products.length > 0) {
            this.isData = true;
            this.productsHeader.push({ name: 'No.' });
            this.productsHeader.push({ name: 'Month' });
            for (var i = 0; i < res.products.length; i++) {
              this.productsHeader.push({ name: res.products[i].name })
            }
          }

          if (res.dataList.length > 0) {
            this.isData = true;
            this.dataList = res.dataList;
            let countNo: number = 0;
            for (var i = 0; i < this.dataList.length; i++) {
              this.dataList[i].productDataList = []
              countNo++;
              this.dataList[i].no = countNo;
              for (var j = 0; j < this.productsHeader.length - 2; j++) {
                this.dataList[i].productDataList.push({ value: null });
              }

              if (this.dataList[i].products) {
                for (var j = 0; j < this.dataList[i].products.length; j++) {
                  for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
                    if (this.dataList[i].productDataList[k].id == this.dataList[i].products[j].id) {
                      this.dataList[i].productDataList[k].noOfPolicy = this.dataList[i].products[j].noOfPolicy
                      this.dataList[i].productDataList[k].totalPreminum = this.dataList[i].products[j].totalPreminum
                    }
                  }
                }
              }
            }
            console.log('dataList', this.dataList);
          }
        }
      });

    
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
