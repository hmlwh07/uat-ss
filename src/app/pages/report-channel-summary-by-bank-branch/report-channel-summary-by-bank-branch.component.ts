import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportChannelSummaryBankBranchExportService } from './report-channel-summary-by-bank-branch-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-channel-summary-by-bank-branch.const';

@Component({
  selector: 'app-report-channel-summary-by-bank-branch',
  templateUrl: './report-channel-summary-by-bank-branch.component.html',
  styleUrls: ['./report-channel-summary-by-bank-branch.component.scss']
})
export class ReportChannelSummaryByBankBranchComponent implements OnInit {
  createFormGroup: FormGroup;
  title = "Channel Summary Report";
  fromMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  fromMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  toMaxDate: { year: number; month: number; day: number; };
  selectOptions = {
    agents: [{ id: 1, agentName: 'Agent 1' }, { id: 2, agentName: 'Agent 2' }],
    companies: [],
    channels: [],
    regions: [],
    cluster: [],
    branches: []
  }

  reports = [];
  products = [];
  policies = [];
  productList = [];

  displayList = [{
    particular: [],
    policies: [],
    premium: []
  }]

  agentName: string = null;
  companyName: string = null;
  channelName: string = null;
  regionName: string = null;
  clusterName: string = null;
  branchName: string = null;


  particularForExcel = [];
  policiesForExcel = [];
  premiumForExcel = [];
  isHasData: boolean = false;

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportChannelSummaryBankBranchExportService) { }


  ngOnInit(): void {
    this.loadForm();
  }

  async getAllReports() {
    this.displayList[0].particular = [];
    this.displayList[0].policies = [];
    this.displayList[0].premium = [];
    await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
      console.log('channelSummaryReport', res);

      if (res) {
        this.reports = res;
        this.isHasData = true;
        let noOfPolicy: number = 0;
        let totalPreminum: number = 0;
        this.displayList[0].particular.push({ channel: 'Particular' });
        this.displayList[0].policies.push({ noOfPolicy: "No. of Policies" });
        this.displayList[0].premium.push({ totalPreminum: "Premuim" });
        console.log('res.channels =====> ', res.channels);

        if (res.channels) {
          for (var i = 0; i < res.channels.length; i++) {
            this.displayList[0].particular.push({ channel: res.channels[i].channel });
          }
        }

        // for (var i = 0; i < this.reports.length; i++) {
        //   noOfPolicy += this.reports[i].noOfPolicy;
        //   totalPreminum += this.reports[i].totalPreminum;
        //   this.displayList[0].particular.push({ branch: this.reports[i].branch });
        //   this.displayList[0].policies.push({ noOfPolicy: this.reports[i].noOfPolicy });
        //   this.displayList[0].premium.push({ totalPreminum: this.reports[i].totalPreminum });
        // }
        this.displayList[0].particular.push({ channel: 'Total' });

        if (res.dataList.length > 0) {
          this.displayList[0].policies.push({ noOfPolicy: noOfPolicy });
          this.displayList[0].premium.push({ totalPreminum: totalPreminum });
        } else {
          for (var i = 0; i < res.channels.length; i++) {
            this.displayList[0].policies.push({ noOfPolicy: null });
            this.displayList[0].premium.push({ totalPreminum: null });
          }
          this.displayList[0].policies.push({ noOfPolicy: null });
          this.displayList[0].premium.push({ totalPreminum: null });
        }

      }
    });
    console.log('displayList =====> ', this.displayList);

    this.cdf.detectChanges();
  }

  generateReportExcel() {
    this.particularForExcel = [];
    this.policiesForExcel = [];
    this.premiumForExcel = [];
    for (var i = 0; i < this.displayList[0].particular.length; i++) {
      this.particularForExcel.push(this.displayList[0].particular[i].channel)
    }

    for (var i = 0; i < this.displayList[0].policies.length; i++) {
      this.policiesForExcel.push(this.displayList[0].policies[i].noOfPolicy)
    }

    for (var i = 0; i < this.displayList[0].premium.length; i++) {
      this.premiumForExcel.push(this.displayList[0].premium[i].totalPreminum)
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
      particularForExcel: this.particularForExcel,
      policiesForExcel: this.policiesForExcel,
      premiumForExcel: this.premiumForExcel
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
    if (type == 'agent') {
      if (ev) {
        this.agentName = ev.agentName
        this.selectOptions.companies.push({ id: 1, companyName: 'companyName 1', agentId: 1 });
      } else {
        this.companyName = null;
        this.selectOptions.companies = [];
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['companyId'].setValue(null);
        this.createFormGroup.controls['channelId'].setValue(null);
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.companies = [...this.selectOptions.companies];
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

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
      "fromDate": new FormControl(''),
      "toDate": new FormControl(''),
      "agentId": new FormControl(0),
      "companyId": new FormControl(0),
      "channelId": new FormControl(0),
      "regionId": new FormControl(0),
      "clusterId": new FormControl(0),
      "branchId": new FormControl(0)
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