import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportBranchSummaryAIExportService } from './report-by-branch-summary-ai-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-by-branch-summary-ai.const';

@Component({
  selector: 'app-report-by-branch-summary-ai',
  templateUrl: './report-by-branch-summary-ai.component.html',
  styleUrls: ['./report-by-branch-summary-ai.component.scss']
})
export class ReportByBranchSummaryAiComponent implements OnInit {
  createFormGroup: FormGroup;
  title = 'By Branch Summary IA'
  fromMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  fromMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  toMaxDate: { year: number; month: number; day: number; };
  selectOptions = {
    companies: [{ id: 1, companyName: 'Company 1' }, { id: 2, companyName: 'Company 2' }],
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


  reportsForExcel = [];
  isData: boolean = false;

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportBranchSummaryAIExportService) { }


  ngOnInit(): void {
    this.loadForm();
  }

  async getAllReports() {
    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      this.reports = [];
      let srNo: number = 1;
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        console.log('getAllReportData', res)
        if (res.length > 0) {
          this.isData = true;
          this.reports = res;
          for (var i = 0; i < this.reports.length; i++) {
            this.reports[i].srNo = srNo + i;
          }
          this.reports = res;
        }
      });
    }
    this.cdf.detectChanges();
  }

  generateReportExcel() {
    this.reportsForExcel = [];
    console.log('generateReportExcel', this.reports);
    let countSrNo: number = 0;
    for (var i = 0; i < this.reports.length; i++) {
      countSrNo += 1;
      this.reportsForExcel.push([countSrNo, this.reports[i].branch,
        this.reports[i].activeAgents, this.reports[i].noOfPolicy, this.reports[i].totalPreminum])
    }

    let fromDate = '';
    let toDate = '';
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
      reportsForExcelHeader: ["Sr. No.", "Branch", "#Active Agents", "#No of Ploicies", "#Premium"],
      reportsForExcel: this.reportsForExcel,
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
    this.getAllReports();
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
