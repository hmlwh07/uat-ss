import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from 'src/app/core/valid-all-feild';
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
  isData: boolean;
  dataList: any;

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportChannelSummaryBankBranchExportService) { }


  ngOnInit(): void {
    this.loadForm();
  }

  async getAllReports() {
    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      this.displayList[0].particular = [];
      this.displayList[0].policies = [];
      this.displayList[0].premium = [];
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        console.log('channelSummaryReport', res);

        if (res) {
          this.reports = res;
          this.displayList[0].particular.push({ id: null, channel: 'Particular' });
          console.log('res.channels =====> ', res.channels);

          // add header
          if (res.channels) {
            res.channels = [...new Map(res.channels.map(item => [item.id, item])).values()];
            for (var i = 0; i < res.channels.length; i++) {
              if (res.channels[i].channel != null) {
                this.displayList[0].particular.push({
                  id: res.channels[i].id,
                  channel: res.channels[i].channel
                });
              }
            }
            this.displayList[0].particular.push({ id: 'total', channel: "Total" });
          }

          res.dataList = [
            {
              "channel": "string",
              "id": 3,
              "noOfPolicy": 300,
              "totalPreminum": 2500
            },
            {
              "channel": "string",
              "id": 26,
              "noOfPolicy": 500,
              "totalPreminum": 200
            }
          ]

          // make a table
          if (res.dataList.length > 0) {
            this.isHasData = true;
            for (var j = 0; j < this.displayList[0].particular.length; j++) {
              this.displayList[0].policies.push(
                {
                  id: this.displayList[0].particular[j].id,
                  noOfPolicy: 0
                });
              if (j == 1) {
                this.displayList[0].policies[0].id = null;
                this.displayList[0].policies[0].noOfPolicy = 'No. of Policies';
              }
            }

            for (var j = 0; j < this.displayList[0].particular.length; j++) {
              this.displayList[0].premium.push({
                id: this.displayList[0].particular[j].id,
                totalPreminum: null
              });
              if (j == 1) {
                this.displayList[0].premium[0].id = null;
                this.displayList[0].premium[0].totalPreminum = 'Premuim';
              }
            }
            // add data value
            for (var i = 0; i < res.dataList.length; i++) {
              for (var j = 0; j < this.displayList[0].policies.length - 1; j++) {
                if (res.dataList[i].id == this.displayList[0].policies[j].id) {
                  this.displayList[0].policies[j].noOfPolicy += res.dataList[i].noOfPolicy
                  // add total noOfPolicy
                  this.displayList[0].policies[this.displayList[0].policies.length - 1].noOfPolicy += res.dataList[i].noOfPolicy
                }
              }

              for (var j = 0; j < this.displayList[0].premium.length - 1; j++) {
                if (res.dataList[i].id == this.displayList[0].premium[j].id) {
                  this.displayList[0].premium[j].totalPreminum += res.dataList[i].totalPreminum
                  // add total totalPreminum
                  this.displayList[0].premium[this.displayList[0].premium.length - 1].totalPreminum += res.dataList[i].totalPreminum
                }
              }
            }
          }
        }
      });
    }
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
      this.policiesForExcel.push(this.displayList[0].policies[i].noOfPolicy || 0)
    }

    for (var i = 0; i < this.displayList[0].premium.length; i++) {
      this.premiumForExcel.push(this.displayList[0].premium[i].totalPreminum || 0)
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