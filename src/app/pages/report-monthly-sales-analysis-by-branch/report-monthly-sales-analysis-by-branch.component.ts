import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from '../../../app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportMonthlySalesAnalysisBranchExportService } from './report-monthly-sales-analysis-by-branch-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-monthly-sales-analysis-by-branch.const';

@Component({
  selector: 'app-report-monthly-sales-analysis-by-branch',
  templateUrl: './report-monthly-sales-analysis-by-branch.component.html',
  styleUrls: ['./report-monthly-sales-analysis-by-branch.component.scss']
})
export class ReportMonthlySalesAnalysisByBranchComponent implements OnInit {
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
  displayList = [];
  title: string = 'Monthly Sales Analysis Report';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportMonthlySalesAnalysisBranchExportService) { }


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
        console.log('monthlySalesAnalysis', res);
        if (res.monthlydataList.length > 0) {
          this.isData = true;
          for (var i = 0; i < res.monthlydataList.length; i++) {
            for (var j = 0; j < activities.length; j++) {
              let obj = {
                agentName: res.monthlydataList[i].agentName,
                branchName: res.monthlydataList[i].branchName,
                activityName: activities[j].activityName,
                monthActualAgainstTarge: this.monthActualAgainstTarge(activities[j].activityName, res.monthlydataList[i]),
                monthConversionToProspect: this.monthConversionToProspect(activities[j].activityName, res.monthlydataList[i]),
                monthConversionToPreviousStage: this.monthConversionToPreviousStage(activities[j].activityName, res.monthlydataList[i]),
                monthExpectedTargetConversion: this.monthExpectedTargetConversion(activities[j].activityName, res.monthlydataList[i]),
                monthExpectedTargetConversionToProspects: this.monthExpectedTargetConversionToProspects(activities[j].activityName, res.monthlydataList[i])
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

  monthActualAgainstTarge(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalLead, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Appointments (Phone)' && obj.monthlyTargetTotalAppointmentPhone != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentPhone, obj.monthlyTargetTotalAppointmentPhone)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.monthlyTargetTotalAppointmentFaceToFace != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentFaceToFace, obj.monthlyTargetTotalAppointmentFaceToFace)
    }
    if (activityName == 'Appointments (Online)' && obj.monthlyTargetTotalAppointmentOnline != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentOnline, obj.monthlyTargetTotalAppointmentOnline)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.monthlyTargetTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalNeeds, obj.monthlyTargetTotalNeeds)
    }
    if (activityName == 'Solutions' && obj.monthlyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSolutions, obj.monthlyTargetSolutions)
    }
    if (activityName == 'Sales' && obj.monthlyTargetSales != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSales, obj.monthlyTargetSales)
    }
    if (activityName == 'Referrals' && obj.monthlyTargetReferrals != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalReferrals, obj.monthlyTargetReferrals)
    }
    return calculatedValue;
  }

  monthConversionToProspect(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentPhone, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentFaceToFace, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentOnline, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalNeeds, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSolutions, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Sales' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSales, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }

  monthConversionToPreviousStage(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentPhone, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentFaceToFace, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentOnline, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.monthlyActualTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalNeeds, obj.monthlyActualTotalLead)
    }
    if (activityName == 'Solutions' && obj.monthlyActualTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSolutions, obj.monthlyActualTotalNeeds)
    }
    if (activityName == 'Sales' && obj.monthlyActualTotalSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSales, obj.monthlyActualTotalSolutions)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }

  monthExpectedTargetConversion(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentPhone, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentFaceToFace, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentOnline, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalNeeds, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Solutions' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSolutions, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Sales' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalSales, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Referrals') {
      calculatedValue = 0
    }
    return calculatedValue;
  }

  monthExpectedTargetConversionToProspects(activityName, obj) {
    let calculatedValue: number = 0;
    if (activityName == 'Daily Lead') {
      calculatedValue = 0
    }
    if (activityName == 'Appointments (Phone)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyActualTotalAppointmentPhone, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Appointments (Face to Face)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyTargetTotalAppointmentFaceToFace, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Appointments (Online)' && obj.monthlyTargetTotalLead != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyTargetTotalAppointmentOnline, obj.monthlyTargetTotalLead)
    }
    if (activityName == 'Needs (LPP & BRAM complete)' && obj.monthlyTargetTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyTargetTotalNeeds, obj.monthlyTargetTotalNeeds)
    }
    if (activityName == 'Solutions' && obj.monthlyTargetTotalNeeds != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyTargetSolutions, obj.monthlyTargetTotalNeeds)
    }
    if (activityName == 'Sales' && obj.monthlyTargetSolutions != 0) {
      calculatedValue = this.calculateDivision(obj.monthlyTargetSales, obj.monthlyTargetSolutions)
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
    console.log('generateReportExcel ', this.reports);
    this.productValues = ['Agent Name', 'Branch Name',
      'Activities', 'Month Actual against Target',
      'Month Conversion to Prospect', 'Month Conversion to Previous Stage',
      'Month Expected Target Conversion', 'Month Expected Target Conversion to Prospects']

    // Data
    for (var i = 0; i < this.displayList.length; i++) {
      this.dataExcel.push([this.displayList[i].agentName,
      this.displayList[i].branchName, this.displayList[i].activityName,
      this.displayList[i].monthActualAgainstTarge || 0.00, this.displayList[i].monthConversionToProspect || 0.00,
      this.displayList[i].monthConversionToPreviousStage || 0.00, this.displayList[i].monthExpectedTargetConversion || 0.00,
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
      if (ev) {
        this.branchName = ev.name
        await this.exportService.getAgentOffice(ev.id).toPromise().then(async (res: any) => {
          if (res) {
            this.selectOptions.agents = res
          }
        });
      } else {
        this.branchName = null;
        this.selectOptions.agents = [];
        this.createFormGroup.controls['agentId'].setValue('');
        this.createFormGroup.value.branchId = '';
        this.createFormGroup.value.agentId = '';
      }
    }

    console.log('type', type);
    console.log('ev', ev);

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
      this.fromMaxDate = this.createFormGroup.value.toDate;
      let diffYear = new Date(this.createFormGroup.value.toDate).getFullYear() - new Date(this.createFormGroup.value.fromDate).getFullYear();
      if (diffYear != 0 && diffYear != 1) {
        this.createFormGroup.controls['fromDate'].setValue('');
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
