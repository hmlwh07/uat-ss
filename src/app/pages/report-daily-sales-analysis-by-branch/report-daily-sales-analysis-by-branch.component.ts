import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from '../../../app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportDailyDalesAnalysisBranchExportService } from './report-daily-sales-analysis-by-branch-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-daily-sales-analysis-by-branch.const';

@Component({
  selector: 'app-report-daily-sales-analysis-by-branch',
  templateUrl: './report-daily-sales-analysis-by-branch.component.html',
  styleUrls: ['./report-daily-sales-analysis-by-branch.component.scss']
})
export class ReportDailySalesAnalysisByBranchComponent implements OnInit {
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
  isData: boolean = false;
  displayList = [];
  title: string = 'Daily Sales Analysis Report';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportDailyDalesAnalysisBranchExportService) { }


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
        console.log('dailySalesAnalysis', res);
        if (res.dailydataList.length > 0) {
          this.isData = true;
          for (var i = 0; i < res.dailydataList.length; i++) {
            for (var j = 0; j < activities.length; j++) {
              let obj = {
                agentName: res.dailydataList[i].agentName,
                branchName: res.dailydataList[i].branchName,
                activityName: activities[j].activityName,
                dailyActualAgainstTarge: this.dailyActualAgainstTarge(activities[j].activityName, res.dailydataList[i]),
                dailyConversionToProspect: this.dailyConversionToProspect(activities[j].activityName, res.dailydataList[i]),
                dailyConversionToPreviousStage: this.dailyConversionToPreviousStage(activities[j].activityName, res.dailydataList[i]),
                dailyExpectedTargetConversion: this.dailyExpectedTargetConversion(activities[j].activityName, res.dailydataList[i]),
                dailyExpectedTargetConversionToProspects: this.dailyExpectedTargetConversionToProspects(activities[j].activityName, res.dailydataList[i])
              }
              this.displayList.push(obj)
            }
          }
        }
      });
    }
    this.cdf.detectChanges();
  }

  dailyActualAgainstTarge(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalLead, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyTargetTotalAppointment)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyTargetTotalAppointment)
    }
    if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyTargetTotalAppointment)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Solutions' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.dailyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalReferrals, obj.dailyTargetSolutions)
    }
    return calculatedValue;
  }

  dailyConversionToProspect(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.dailyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalReferrals, obj.dailyActualTotalSolutions)
    }
    return calculatedValue;
  }

  dailyConversionToPreviousStage(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentPhone, obj.dailyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentFaceToFace, obj.dailyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalNeeds, obj.dailyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSolutions, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalSales, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.dailyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalReferrals, obj.dailyActualTotalSolutions)
    }
    return calculatedValue;
  }

  dailyExpectedTargetConversion(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointment, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointment, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyActualTotalAppointmentOnline != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalNeeds, obj.dailyActualTotalAppointmentOnline)
    }
    if (activityName == 'Solutions' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSolutions, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSales, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSolutions, obj.dailyTargetTotalLead)
    }
    return calculatedValue;
  }

  dailyExpectedTargetConversionToProspects(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointment, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalAppointment, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.dailyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.dailyActualTotalAppointmentOnline, obj.dailyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetTotalNeeds, obj.dailyTargetTotalAppointment)
    }
    if (activityName == 'Solutions' && obj.dailyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSolutions, obj.dailyTargetTotalAppointment)
    }
    if (activityName == 'Sales' && obj.dailyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSales, obj.dailyTargetSolutions)
    }
    if (activityName == 'Referrals' && obj.dailyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.dailyTargetSales, obj.dailyTargetSolutions)
    }
    return calculatedValue;
  }


  calculateDivision(value, divided) {
    let returnValue: any;
    if (divided != 0) {
      returnValue = this.mathRoundTo(value / divided, 2);
    } else {
      returnValue = 0;
    }
    return returnValue;
  }



  generateReportExcel() {
    this.dataExcel = [];
    console.log('generateReportExcel ', this.reports);
    this.productValues = ['Agent Name', 'Branch Name',
      'Activities', 'Daily Actual against Target',
      'Daily Conversion to Prospect', 'Daily Conversion to Previous Stage',
      'Daily Expected Target Conversion', 'Daily Expected Target Conversion to Prospects']

    // Data
    for (var i = 0; i < this.displayList.length; i++) {
      this.dataExcel.push([this.displayList[i].agentName,
      this.displayList[i].branchName, this.displayList[i].activityName,
      this.displayList[i].dailyActualAgainstTarge, this.displayList[i].dailyConversionToProspect,
      this.displayList[i].dailyConversionToPreviousStage, this.displayList[i].dailyExpectedTargetConversion,
      this.displayList[i].dailyExpectedTargetConversionToProspects])
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
    this.productList = [];
    this.reports = [];

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
