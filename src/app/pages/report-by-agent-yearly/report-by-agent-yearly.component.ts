import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { validateAllFields } from '../../../app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportAgentYearlyExportService } from './report-by-agent-yearly-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-by-agent-yearly.const';

@Component({
  selector: 'app-report-by-agent-yearly',
  templateUrl: './report-by-agent-yearly.component.html',
  styleUrls: ['./report-by-agent-yearly.component.scss']
})
export class ReportByAgentYearlyComponent implements OnInit {
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
  isData: boolean = false;
  dataList = [];
  totalDataList = [];
  title = 'Individual production summary';

  constructor(private cdf: ChangeDetectorRef, private datePipe: DatePipe,
    public exportService: ReportAgentYearlyExportService) { }


  ngOnInit(): void {
    this.loadForm();
    this.getOfficeHirearchy();
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

  async getAllReports() {
    this.productList = [];
    this.dataList = [];
    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          if (res.headerColumnList.length > 0) {
            for (var i = 0; i < res.headerColumnList.length; i++) {
              this.productList.push(res.headerColumnList[i]);
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
              let list = [];
              for (var j = 0; j < this.productList.length; j++) {
                list.push({ reportMonth: this.productList[j].reportMonth, noOfPolicies: 0, totalPremium: 0 });
              }
              countNo++;
              this.dataList[i].no = countNo;
              this.dataList[i].productDataList = list;
              if (this.dataList[i].dynamicList) {
                for (var j = 0; j < this.dataList[i].dynamicList.length; j++) {
                  for (var k = 0; k < this.dataList[i].productDataList.length; k++) {
                    if (this.dataList[i].productDataList[k].reportMonth == this.dataList[i].dynamicList[j].reportMonth) {
                      this.dataList[i].productDataList[k].noOfPolicies = this.dataList[i].dynamicList[j].noOfPolicies;
                      this.dataList[i].productDataList[k].totalPremium = this.dataList[i].dynamicList[j].totalPremium;
                      totalPolicies += this.dataList[i].dynamicList[j].noOfPolicies;
                      totalPremium += this.dataList[i].dynamicList[j].totalPremium;
                    }
                  }
                }
                this.dataList[i].totalPolicies = totalPolicies;
                this.dataList[i].totalPremium = totalPremium;
              }
            }
          } else {
            this.isData = false;
          }
        }
      });
    }
    this.cdf.detectChanges();
  }

  generateReportExcel() {
    this.productValues = [];
    this.subHeader = [];
    this.dataExcel = [];
    for (var i = 0; i < this.productList.length; i++) {
      this.productValues.push(this.productList[i].reportMonth)
    }

    // Sub Header
    this.subHeader = ["No.", "Branch", "Channel", "Agent Name", "Agent No."];
    for (var i = 0; i < this.productList.length; i++) {
      this.subHeader.push("No of Policies");
      this.subHeader.push("Premium");
    }
    this.subHeader.push("Total No. of Policies");
    this.subHeader.push("Total Premium");

    // Data
    let countNo: number = 0;
    for (var i = 0; i < this.dataList.length; i++) {
      let list = [];
      countNo++
      list.push(countNo, this.dataList[i].cluster, this.dataList[i].channel,
        this.dataList[i].agentName, this.dataList[i].agentNo)
      for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
        list.push(this.dataList[i].productDataList[j].noOfPolicies,
          this.dataList[i].productDataList[j].totalPremium || 0.00)
      }
      list.push(this.dataList[i].totalPolicies || 0.00, this.dataList[i].totalPremium || 0.00);
      this.dataExcel.push(list);
    }

    let fromDate = null;
    let toDate = null;
    if (this.createFormGroup.value.fromDate) {
      fromDate = this.datePipe.transform(this.createFormGroup.value.fromDate, 'MM/yyyy');
    }
    if (this.createFormGroup.value.fromDate) {
      toDate = this.datePipe.transform(this.createFormGroup.value.toDate, 'MM/yyyy');
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
      subHeader: this.subHeader,
      data: this.dataExcel
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
    this.productList = [];
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
    this.productList = [];
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
