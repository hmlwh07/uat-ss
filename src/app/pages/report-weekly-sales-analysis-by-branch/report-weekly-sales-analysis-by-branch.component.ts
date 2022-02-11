import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  title: string = 'Weekly Sales Analysis Report';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportWeeklySalesAnalysisBranchExportService) { }


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
        console.log('weeklySalesAnalysis', res);
        if (res.datum.weeklydataList) {
          this.isData = true;
          for (var i = 0; i < res.datum.weeklydataList.length; i++) {
            for (var j = 0; j < activities.length; j++) {
              let obj = {
                agentName: res.datum.weeklydataList[i].agentName,
                branchName: res.datum.weeklydataList[i].branchName,
                activityName: activities[j].activityName,
                weekActualAgainstTarge: this.weekActualAgainstTarge(activities[j].activityName, res.datum.weeklydataList[i]),
                weekConversionToProspect: this.weekConversionToProspect(activities[j].activityName, res.datum.weeklydataList[i]),
                weekConversionToPreviousStage: this.weekConversionToPreviousStage(activities[j].activityName, res.datum.weeklydataList[i]),
                weekExpectedTargetConversion: this.weekExpectedTargetConversion(activities[j].activityName, res.datum.weeklydataList[i]),
                weekExpectedTargetConversionToProspects: this.weekExpectedTargetConversionToProspects(activities[j].activityName, res.datum.weeklydataList[i])
              }
              this.displayList.push(obj)
            }
          }
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
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentPhone, obj.weeklyTargetTotalAppointment)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentFaceToFace, obj.weeklyTargetTotalAppointment)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalAppointment)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalReferrals, obj.weeklyTargetSolutions)
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
    if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.weeklyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalReferrals, obj.weeklyActualTotalSolutions)
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
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalNeeds, obj.weeklyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSolutions, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalSales, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.weeklyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalReferrals, obj.weeklyActualTotalSolutions)
    }
    return calculatedValue;
  }

  weekExpectedTargetConversion(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointment, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointment, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyActualTotalAppointmentOnline != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds, obj.weeklyActualTotalAppointmentOnline)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Referrals' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalLead)
    }
    return calculatedValue;
  }

  weekExpectedTargetConversionToProspects(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointment, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalAppointment, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.weeklyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyActualTotalAppointmentOnline, obj.weeklyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetTotalNeeds, obj.weeklyTargetTotalAppointment)
    }
    if (activityName == 'Solutions' && obj.weeklyTargetTotalAppointment != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSolutions, obj.weeklyTargetTotalAppointment)
    }
    if (activityName == 'Sales' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetSolutions)
    }
    if (activityName == 'Referrals' && obj.weeklyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.weeklyTargetSales, obj.weeklyTargetSolutions)
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
      'Activities', 'Week Actual against Target',
      'Week Conversion to Prospect', 'Week Conversion to Previous Stage',
      'Week Expected Target Conversion', 'Week Expected Target Conversion to Prospects']

    // Data
    for (var i = 0; i < this.displayList.length; i++) {
      this.dataExcel.push([this.displayList[i].agentName,
      this.displayList[i].branchName, this.displayList[i].activityName,
      this.displayList[i].weekActualAgainstTarge, this.displayList[i].weekConversionToProspect,
      this.displayList[i].weekConversionToPreviousStage, this.displayList[i].weekExpectedTargetConversion,
      this.displayList[i].monthExpectedTargetConversionToProspects])
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
