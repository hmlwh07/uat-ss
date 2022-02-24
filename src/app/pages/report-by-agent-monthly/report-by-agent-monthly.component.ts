import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from '../../../app/core/valid-all-feild';
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
  productsHeader = [];
  dataList = [];
  title: string = 'Monthly Activity Report';


  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportAgentMonthlyExportService) { }


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
            res.dataList.sort((a, b) => {
              if (a.agentName < b.agentName) return -1
              return a.agentName > b.agentName ? 1 : 0
            });
            this.dataList = res.dataList;
            for (var i = 0; i < this.dataList.length; i++) {
              let list = [];
              for (var j = 0; j < this.productList.length; j++) {
                this.productList[j].monthlyValue = 0.00;
                list.push(this.productList[j]);
              }

              this.dataList[i].productDataList = JSON.parse(JSON.stringify(list));
              if (this.dataList[i].dynamicList) {
                for (var j = 0; j < this.dataList[i].dynamicList.length; j++) {
                  //let totalTargetValue: number = 0;
                  for (var k = 0; k < this.dataList[i].productDataList.length; k++) {  
                    if (this.dataList[i].productDataList[k].headerMonthName == this.dataList[i].dynamicList[j].headerMonthName) {
                      this.dataList[i].productDataList[k].headerDateName = this.dataList[i].dynamicList[j].headerDateName
                      this.dataList[i].productDataList[k].headerDate = this.dataList[i].dynamicList[j].headerDate
                      this.dataList[i].productDataList[k].headerWeekName = this.dataList[i].dynamicList[j].headerWeekName
                      this.dataList[i].productDataList[k].headerWeekRange = this.dataList[i].dynamicList[j].headerWeekRange
                      this.dataList[i].productDataList[k].headerMonthName = this.dataList[i].dynamicList[j].headerMonthName
                      //this.dataList[i].productDataList[k].targetValue = this.dataList[i].dynamicList[j].targetValue
                      this.dataList[i].productDataList[k].dailyValue = Number(this.dataList[i].dynamicList[j].dailyValue)
                      this.dataList[i].productDataList[k].weeklyValue = Number(this.dataList[i].dynamicList[j].weeklyValue)
                      this.dataList[i].productDataList[k].monthlyValue = Number(this.dataList[i].dynamicList[j].monthlyValue)
                      //totalTargetValue += Number(this.dataList[i].dynamicList[j].targetValue);
                    }
                  }

                  //this.dataList[i].totalTargetValue = totalTargetValue
                }
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
    this.dataExcel = [];

    this.productValues = ["Agent Name", "Branch Name", "Activities Name", "Target"];
    for (var i = 0; i < this.productList.length; i++) {
      this.productValues.push(this.productList[i].headerMonthName)
    }


    // Data
    for (var i = 0; i < this.dataList.length; i++) {
      let list = [];
      list.push(this.dataList[i].agentName,
        this.dataList[i].branchName, this.dataList[i].activitiesName,
        this.dataList[i].target || 0.00)
      for (var j = 0; j < this.dataList[i].productDataList.length; j++) {
        list.push(this.dataList[i].productDataList[j].monthlyValue || 0.00)
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
      let value = this.createFormGroup.controls['fromDate'].value;
      if (value) {
        let toDate = moment(this.createFormGroup.controls['fromDate'].value).add(0, 'years')
        this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        this.createFormGroup.controls['fromDate'].setValue(toDate.format('YYYY-MM-DD'))
      }
      var fromDate = new Date(this.createFormGroup.value.fromDate);
      fromDate.setFullYear(fromDate.getFullYear() + 1);
      fromDate.setDate(fromDate.getDate() - 1);
      this.fromMinDate = this.createFormGroup.value.fromDate
      this.fromMaxDate = fromDate;
      let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
      if (diffYear != 0 && diffYear != 1) {
        this.createFormGroup.controls['toDate'].setValue('');
      }
    }

    if (type == 'ToDate') {
      let value = this.createFormGroup.controls['toDate'].value;
      if (value) {
        let toDate = moment(this.createFormGroup.controls['toDate'].value).add(0, 'years')
        this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
        this.createFormGroup.controls['toDate'].setValue(toDate.format('YYYY-MM-DD'))
      }
      var toDate = new Date(this.createFormGroup.value.toDate);
      toDate.setFullYear(toDate.getFullYear() - 1);
      toDate.setDate(toDate.getDate() + 1);
      this.fromMinDate = toDate
      if (!this.createFormGroup.value.toDate) {
        this.fromMaxDate = this.createFormGroup.value.toDate;
      }

      let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
      if (diffYear != 0 && diffYear != 1) {
        this.createFormGroup.controls['fromDate'].setValue('');
      }
      if (diffYear == 1) {
        if (new Date(this.createFormGroup.value.toDate).getMonth() > new Date(this.createFormGroup.value.fromDate).getMonth()) {
          this.createFormGroup.controls['fromDate'].setValue('');
        }
        if (new Date(this.createFormGroup.value.toDate).getMonth() == new Date(this.createFormGroup.value.fromDate).getMonth() &&
          new Date(this.createFormGroup.value.toDate).getDate() >= new Date(this.createFormGroup.value.fromDate).getDate()) {
          this.createFormGroup.controls['fromDate'].setValue('');
        }
      }
    }
    this.cdf.detectChanges();
  }


  clearDate(type) {
    this.fromMinDate = null;
    this.fromMaxDate = null;
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue('');
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue('');
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
