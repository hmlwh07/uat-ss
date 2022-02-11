import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        if (res.datum.monthlydataList.length > 0) {
          this.isData = true;
          for (var i = 0; i < res.datum.monthlydataList.length; i++) {
            for (var j = 0; j < activities.length; j++) {
              let obj = {
                agentName: res.datum.monthlydataList[i].agentName,
                branchName: res.datum.monthlydataList[i].branchName,
                activityName: activities[j].activityName,
                monthActualAgainstTarge: this.monthActualAgainstTarge(activities[j].activityName, res.datum.monthlydataList[i]),
                monthConversionToProspect: this.monthConversionToProspect(activities[j].activityName, res.datum.monthlydataList[i]),
                monthConversionToPreviousStage: this.monthConversionToPreviousStage(activities[j].activityName, res.datum.monthlydataList[i]),
                monthExpectedTargetConversion: this.monthExpectedTargetConversion(activities[j].activityName, res.datum.monthlydataList[i]),
                monthExpectedTargetConversionToProspects: this.monthExpectedTargetConversionToProspects(activities[j].activityName, res.datum.monthlydataList[i])
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
      'Activities', 'Month Actual against Target',
      'Month Conversion to Prospect', 'Month Conversion to Previous Stage',
      'Month Expected Target Conversion', 'Month Expected Target Conversion to Prospects']

    // Data
    for (var i = 0; i < this.displayList.length; i++) {
      this.dataExcel.push([this.displayList[i].agentName,
      this.displayList[i].branchName, this.displayList[i].activityName,
      this.displayList[i].monthActualAgainstTarge, this.displayList[i].monthConversionToProspect,
      this.displayList[i].monthConversionToPreviousStage, this.displayList[i].monthExpectedTargetConversion,
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
    //this.getAllReports();
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
