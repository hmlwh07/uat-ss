import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from '../../../app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportWeeklySalesAnalysisBranchExportService } from './report-weekly-sales-analysis-by-branch-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-weekly-sales-analysis-by-branch.const';

@Component({
  selector: 'app-report-weekly-sales-analysis-by-branch',
  templateUrl: './report-weekly-sales-analysis-by-branch.component.html',
  styleUrls: ['./report-weekly-sales-analysis-by-branch.component.scss']
})
export class ReportWeeklySalesAnalysisByBranchComponent implements OnInit {
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
  displayList = [];
  title: string = 'Weekly Activity Analysis';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportWeeklySalesAnalysisBranchExportService) { }


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
    this.displayList = [];
    let activities = [
      { activityName: 'Daily Lead' },
      { activityName: 'Appointments (Phone)' },
      { activityName: 'Appointments (Face to Face)' },
      { activityName: 'Appointments (Online)' },
      { activityName: 'Needs (LPP & BRAM complete)' },
      { activityName: 'Solutions' },
      { activityName: 'Sales' },
      { activityName: 'Referrals' }
    ]

    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        if (res.weeklydataList.length > 0) {
          this.isData = true;
          for (var i = 0; i < res.weeklydataList.length; i++) {
            for (var j = 0; j < activities.length; j++) {
              let obj = {
                agentName: res.weeklydataList[i].agentName,
                branchName: res.weeklydataList[i].branchName,
                activityName: activities[j].activityName,
                weekActualAgainstTarge: this.weekActualAgainstTarge(activities[j].activityName, res.weeklydataList[i]),
                weekConversionToProspect: this.weekConversionToProspect(activities[j].activityName, res.weeklydataList[i]),
                weekConversionToPreviousStage: this.weekConversionToPreviousStage(activities[j].activityName, res.weeklydataList[i]),
                weekExpectedTargetConversion: this.weekExpectedTargetConversion(activities[j].activityName, res.weeklydataList[i]),
                weekExpectedTargetConversionToProspects: this.weekExpectedTargetConversionToProspects(activities[j].activityName, res.weeklydataList[i])
              }
              this.displayList.push(obj)
            }
          }
        } else {
          this.isData = false
        }
      });
    }
    this.cdf.detectChanges();
  }

  weekActualAgainstTarge(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalLead, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalAppointmentPhone != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyTargetTotalAppointmentPhone)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalAppointmentFaceToFace != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyTargetTotalAppointmentFaceToFace)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalAppointmentOnline != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalAppointmentOnline)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyTargetTotalNeeds)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyTargetSolutions)
    }
    if (activityName == 'Sales' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyTargetSolutions)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0;
    }
    return calculatedValue;
  }

  weekConversionToProspect(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }

  weekConversionToPreviousStage(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)') {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds,
        obj.weeklyActualTotalAppointmentFaceToFace +
        obj.weeklyActualTotalAppointmentOnline +
        obj.weeklyActualTotalAppointmentPhone)
    }
    if (activityName == 'Solutions' && obj.weeklyActualTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyActualTotalNeeds)
    }
    if (activityName == 'Sales' && obj.weeklyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyActualTotalSolutions)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0;
    }
    return calculatedValue;
  }

  weekExpectedTargetConversion(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentPhone, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentFaceToFace, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentOnline, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }

  weekExpectedTargetConversionToProspects(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentOnline, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointmentFaceToFace, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)') {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds,
        obj.weeklyTargetTotalAppointmentFaceToFace +
        obj.weeklyTargetTotalAppointmentOnline +
        obj.weeklyTargetTotalAppointmentPhone)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalNeeds)
    }
    if (activityName == 'Sales' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetSolutions)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }


  calculateDivision(value, divided) {
    let returnValue: any;
    if (divided != 0) {
      returnValue = value / divided;
    } else {
      returnValue = 0;
    }
    return returnValue;
  }



  generateReportExcel() {
    this.dataExcel = [];
    this.productValues = ['Agent Name', 'Branch Name',
      'Activities', 'Week Actual against Target',
      'Week Conversion to Prospect', 'Week Conversion to Previous Stage',
      'Week Expected Target Conversion', 'Week Expected Target Conversion to Prospects']

    // Data
    for (var i = 0; i < this.displayList.length; i++) {
      this.dataExcel.push([this.displayList[i].agentName,
      this.displayList[i].branchName, this.displayList[i].activityName,
      this.displayList[i].weekActualAgainstTarge || 0.00, this.displayList[i].weekConversionToProspect || 0.00,
      this.displayList[i].weekConversionToPreviousStage || 0.00, this.displayList[i].weekExpectedTargetConversion || 0.00,
      this.displayList[i].monthExpectedTargetConversionToProspects || 0.00])
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
      productsHeader: this.productValues,
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
    this.displayList = [];
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
      let fromDateValue = moment(this.createFormGroup.controls['fromDate'].value).format('YYYY-MM-DD');
      let toDateValue = moment(this.createFormGroup.controls['toDate'].value).format('YYYY-MM-DD');
      if (toDateValue) {
        let formDateSplit = fromDateValue.split("-");
        let toDateSplit = toDateValue.split("-");
        let diffYear = Number(toDateSplit[0]) - Number(formDateSplit[0]);
        if (diffYear != 0 && diffYear != 1) {
          this.createFormGroup.controls['toDate'].setValue('');
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
      }

      if (toDateValue) {
        var fromDate = new Date(toDateValue);
        fromDate.setFullYear(fromDate.getFullYear() - 1);
        fromDate.setDate(fromDate.getDate() + 1);
        this.fromMinDate =  fromDate;
        this.fromMaxDate = new Date(toDateValue);
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
    this.displayList = [];
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
