import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from '../../../app/core/valid-all-feild';
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
    companies: [],
    channels: [],
    regions: [],
    cluster: [],
    branches: [],
    agents: [],
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
    this.getOfficeHirearchy();
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
      this.productsHeader = [];
      this.branchDataList = [];
      this.dataList = [];
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        console.log('policyProductBranch', res);
        if (res) {
          if (res.products.length > 0) {
            this.isData = true;
            for (var i = 0; i < res.products.length; i++) {
              this.productsHeader.push({ id: res.products[i].id, name: res.products[i].name })
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
              for (var j = 0; j < this.productsHeader.length; j++) {
                this.dataList[i].productDataList.push({ id: this.productsHeader[j].id, noOfPolicy: 0 });
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
    this.productValues.push('No.');
    this.productValues.push('Month');
    for (var i = 0; i < this.productsHeader.length; i++) {
      this.productValues.push(this.productsHeader[i].name)
    }

    for (var i = 0; i < this.dataList.length; i++) {
      let list = [];
      list.push(i + 1, this.dataList[i].month)
      for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
        list.push(this.dataList[i].productDataList[j].noOfPolicy)
      }
      this.branchDataForExcel.push(list)
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
    this.isData = false;
    this.productsHeader = [];
    this.dataList = []
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
