import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
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
  fromMinDate = null;
  fromMaxDate = null;
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
  title: string = "Monthly Product Sales by Channel";
  dataList = [];
  totalDataList = [];
  noOfPolicyByProduct: number;
  totalPreminumByProduct: number;
  header = [];
  productName: string = 'All';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportProductSalesChannelPoliciesExportService) { }


  ngOnInit(): void {
    this.loadForm();
    this.getOfficeHirearchy();
    this.getAllProducts();
    this.fromMinDate = null;
    this.fromMaxDate = null;
  }

  async getOfficeHirearchy() {
    await this.exportService.getOfficeHirearchy('', '01').toPromise().then(async (res: any) => {
      if (res) {
        this.selectOptions.companies = res
      }
    });
  }

  async getAllProducts() {
    await this.exportService.getAllProducts().toPromise().then(async (res: any) => {
      if (res) {
        res.push({ statusCd: '02', statusValue: 'Active', name: 'All', code: 'All' });
        this.productList = res;
        this.productList = this.productList.filter(
          obj => obj.statusCd === "02" && obj.statusValue === "Active").reverse();
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
      if (!this.createFormGroup.value.productCodes) {
        this.createFormGroup.value.productCodes = "All";
      }
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          if (res.products.length > 0) {
            for (var i = 0; i < res.products.length; i++) {
              this.productsHeader.push({
                id: res.products[i].id, name: res.products[i].name,
                noOfPolicy: 0, totalPreminum: 0
              })
            }
          }

          if (res.dataList.length > 0) {
            this.isData = true;
            this.dataList = res.dataList;
            let countNo: number = 0;
            for (var i = 0; i < this.dataList.length; i++) {
              this.dataList[i].totalPolicies = 0;
              this.dataList[i].totalPremium = 0;
              let totalPolicies: number = 0;
              let totalPremium: number = 0;
              this.dataList[i].productDataList = []
              countNo++;
              this.dataList[i].no = countNo;
              for (var j = 0; j < this.productsHeader.length; j++) {
                this.dataList[i].productDataList.push({ id: this.productsHeader[j].id, noOfPolicy: 0, totalPreminum: 0 });
              }

              if (this.dataList[i].products) {
                for (var j = 0; j < this.dataList[i].products.length; j++) {
                  for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
                    if (this.dataList[i].productDataList[k].id == this.dataList[i].products[j].id) {
                      this.dataList[i].productDataList[k].noOfPolicy = this.dataList[i].products[j].noOfPolicy
                      this.dataList[i].productDataList[k].totalPreminum = this.dataList[i].products[j].totalPreminum
                      totalPolicies += this.dataList[i].products[j].noOfPolicy;
                      totalPremium += this.dataList[i].products[j].totalPreminum;
                    }
                  }
                }
                this.dataList[i].totalPolicies = totalPolicies;
                this.dataList[i].totalPremium = totalPremium;


                if (countNo == this.dataList.length) {
                  this.totalDataList = JSON.parse(JSON.stringify(this.productsHeader));
                  this.noOfPolicyByProduct = 0;
                  this.totalPreminumByProduct = 0;
                  for (var i = 0; i < this.dataList.length; i++) {
                    for (var j = 0; j < this.dataList[i].products.length; j++) {
                      let total: number = 0;
                      for (var k = 0; k < this.totalDataList.length; k++) {
                        if (this.totalDataList[k].id == this.dataList[i].products[j].id) {
                          this.totalDataList[k].noOfPolicy += this.dataList[i].products[j].noOfPolicy;
                          this.totalDataList[k].totalPreminum += this.dataList[i].products[j].totalPreminum;

                        }
                      }
                    }

                    this.noOfPolicyByProduct += this.dataList[i].totalPolicies;
                    this.totalPreminumByProduct += this.dataList[i].totalPremium;
                  }

                  for (var k = 0; k < this.totalDataList.length; k++) {
                    this.totalDataList[k].noOfPolicy = this.totalDataList[k].noOfPolicy
                    this.totalDataList[k].totalPreminum = this.totalDataList[k].totalPreminum
                  }

                }
              }
            }
          } else {
            this.isData = false
          }
        }
      });


    }
    this.cdf.detectChanges();
  }

  generateReportExcel() {
    this.productValues = []
    this.branchDataForExcel = [];
    this.header = [];
    // For header
    for (var i = 0; i < this.productsHeader.length; i++) {
      this.header.push(this.productsHeader[i].name)
    }

    // For sub header
    this.productValues.push('No.');
    this.productValues.push('Month');
    for (var i = 0; i < this.productsHeader.length; i++) {
      this.productValues.push('No of Policies', 'Premium')
    }
    this.productValues.push('Total No. of Policies');
    this.productValues.push('Total Premium');

    for (var i = 0; i < this.dataList.length; i++) {
      let list = [];
      list.push(i + 1, this.dataList[i].month)
      for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
        list.push(this.dataList[i].productDataList[j].noOfPolicy || 0.00,
          this.dataList[i].productDataList[j].totalPreminum || 0.00)
      }
      list.push(this.dataList[i].totalPolicies || 0.00, this.dataList[i].totalPremium || 0.00);
      this.branchDataForExcel.push(list)
    }


    let totalList = [];
    totalList.push('');
    totalList.push('Total');
    for (var i = 0; i < this.totalDataList.length; i++) {
      totalList.push(this.totalDataList[i].noOfPolicy, this.totalDataList[i].totalPreminum)
    }
    totalList.push(this.noOfPolicyByProduct);
    totalList.push(this.totalPreminumByProduct);

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
        { branchName: this.branchName },
        { productName: this.productName }
      ],
      productsHeader: this.productValues,
      branchDataForExcel: this.branchDataForExcel,
      header: this.header,
      totalList: totalList
    }
    this.exportService.exportExcel(reportData);
  }

  cancelReport() {
    this.createFormGroup.reset();
    this.loadForm();
    this.selectOptions.channels = [];
    this.selectOptions.regions = [];
    this.selectOptions.cluster = [];
    this.selectOptions.branches = [];
    this.selectOptions.agents = [];
    this.productsHeader = [];
    this.branchDataList = [];
    this.dataList = [];
    this.agentName = null;
    this.companyName = null;
    this.channelName = null;
    this.regionName = null;
    this.clusterName = null;
    this.branchName = null;
    this.agentName = null;
    this.isData = false;
    this.fromMinDate = null;
    this.fromMaxDate = null;
    this.cdf.detectChanges();
  }


  async changeOptions(ev, type) {
    if (type == 'company') {
      if (ev) {
        this.companyName = ev.name
        await this.exportService.getOfficeHirearchy('', '01').toPromise().then(async (res: any) => {
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
        this.companyName = null;
        this.createFormGroup.value.companyId = '';
        this.createFormGroup.value.channelId = '';
        this.createFormGroup.value.regionId = '';
        this.createFormGroup.value.clusterId = '';
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
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
        this.channelName = null
        this.createFormGroup.value.channelId = '';
        this.createFormGroup.value.regionId = '';
        this.createFormGroup.value.clusterId = '';
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
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
        this.regionName = null
        this.createFormGroup.value.regionId = '';
        this.createFormGroup.value.clusterId = '';
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
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
        this.clusterName = null;
        this.createFormGroup.value.clusterId = '';
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
      }
    }

    if (type == 'agent') {
      this.selectOptions.agents = [];
      this.createFormGroup.controls['agentId'].setValue('');
      if (ev) {
        this.branchName = ev.name
        await this.exportService.getAgentOffice(ev.id).toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.agents = res
          }
        });
      } else {
        this.branchName = null;
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
      }
    }

    if (type == 'office') {
      if (ev) {
        this.agentName = ev.agentName
      } else {
        this.agentName = null
        this.createFormGroup.value.agentId = '';
      }
    }
    this.getAllReports();
    this.cdf.detectChanges()
  }

  changeProductOptions(ev) {
    if (ev.name) {
      this.productName = ev.name
    }
    this.getAllReports();
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
      "branchId": new FormControl(''),
      "productCodes": new FormControl('All')
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
      let fromDateValue = moment(this.createFormGroup.controls['fromDate'].value).format('YYYY-MM-DD');
      let toDateValue = moment(this.createFormGroup.controls['toDate'].value).format('YYYY-MM-DD');
      if (toDateValue) {
        let formDateSplit = fromDateValue.split("-");
        let toDateSplit = toDateValue.split("-");
        let diffYear = Number(toDateSplit[0]) - Number(formDateSplit[0]);
        if (diffYear != 0 && diffYear != 1) {
          this.createFormGroup.controls['toDate'].setValue('');
        }

        if (diffYear == 0) {
          if (formDateSplit[1] > toDateSplit[1]) {
            this.createFormGroup.controls['toDate'].setValue('');
          }
          if (formDateSplit[1] == toDateSplit[1]) {
            if (formDateSplit[2] > toDateSplit[2]) {
              this.createFormGroup.controls['toDate'].setValue('');
            }
          }
        }

      }
      if (fromDateValue) {
        var toDate = new Date(fromDateValue);
        toDate.setFullYear(toDate.getFullYear() + 1);
        toDate.setDate(toDate.getDate() - 1);
        this.fromMinDate = new Date(fromDateValue);
        this.fromMaxDate = toDate;
      }
    }
    if (type == 'ToDate') {
      let fromDateValue = moment(this.createFormGroup.controls['fromDate'].value).format('YYYY-MM-DD');
      let toDateValue = moment(this.createFormGroup.controls['toDate'].value).format('YYYY-MM-DD');
      if (fromDateValue) {
        let formDateSplit = fromDateValue.split("-");
        let toDateSplit = toDateValue.split("-");
        let diffYear = Number(toDateSplit[0]) - Number(formDateSplit[0]);
        if (diffYear != 0 && diffYear != 1) {
          this.createFormGroup.controls['fromDate'].setValue('');
        }

        if (diffYear == 0) {
          if (formDateSplit[1] > toDateSplit[1]) {
            this.createFormGroup.controls['toDate'].setValue('');
          }
          if (formDateSplit[1] == toDateSplit[1]) {
            if (formDateSplit[2] > toDateSplit[2]) {
              this.createFormGroup.controls['toDate'].setValue('');
            }
          }
        }
      }

      if (toDateValue) {
        var fromDate = new Date(toDateValue);
        fromDate.setFullYear(fromDate.getFullYear() - 1);
        fromDate.setDate(fromDate.getDate() + 1);
        this.fromMinDate = fromDate;
        this.fromMaxDate = new Date(toDateValue);
      }
    }
    this.cdf.detectChanges();
  }


  clearDate(type) {
    // this.fromMinDate = null;
    // this.fromMaxDate = null;
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue('');
      this.doValid('ToDate')
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue('');
      this.doValid('FromDate')
    }
    this.isData = false;
    this.productsHeader = [];
    this.dataList = []

    this.selectOptions.channels = [];
    this.selectOptions.regions = [];
    this.selectOptions.cluster = [];
    this.selectOptions.branches = [];
    this.selectOptions.agents = [];
    this.createFormGroup.controls['companyId'].setValue('');
    this.createFormGroup.controls['channelId'].setValue('');
    this.createFormGroup.controls['regionId'].setValue('');
    this.createFormGroup.controls['clusterId'].setValue('');
    this.createFormGroup.controls['branchId'].setValue('');
    this.createFormGroup.controls['agentId'].setValue('');
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
