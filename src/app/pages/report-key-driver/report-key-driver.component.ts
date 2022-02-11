import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateAllFields } from '../../../app/core/valid-all-feild';
import { ReportIdentityType, ReportStatus } from '../report-detail-by-agent/report-detail-by-agent.const';
import { ReportKeyDriverExportService } from './report-key-driver-export.service';
import { CONSTANT_AGENT_REPORT_DATA } from './report-key-driver.const';

@Component({
  selector: 'app-report-key-driver',
  templateUrl: './report-key-driver.component.html',
  styleUrls: ['./report-key-driver.component.scss']
})
export class ReportKeyDriverComponent implements OnInit {
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
  displayDataList = [];
  totalAverageCaseSize: number = 0;
  totalProductDistribution: number = 0;
  roundTotalProductDistribution: string;
  roundTotalAverageCaseSize: string;
  totalNewBusinessCase: number = 0;
  totalPremium: number = 0;
  keyDriver: any;
  activeRatio: string;
  title: string = 'Key Driver Report';
  productivity: any;
  channelProductivity: string;
  anpCaseSize: string;
  monthlyCaseSize: string;

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportKeyDriverExportService) { }


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
    this.totalNewBusinessCase = 0;
    this.totalPremium = 0;
    this.totalProductDistribution = 0;
    this.totalAverageCaseSize = 0;

    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        console.log('keyDriver', res);
        if (res.datum) {
          this.keyDriver = res.datum
          if (res.datum.productsList.length > 0) {
            this.isData = true;
            for (var i = 0; i < res.datum.productsList.length; i++) {
              this.totalNewBusinessCase += res.datum.productsList[i].pcount;
              this.totalPremium += res.datum.productsList[i].premium;
            }
            for (var i = 0; i < res.datum.productsList.length; i++) {
              let obj = {
                product: res.datum.productsList[i].pcode,
                newBusinessCase: res.datum.productsList[i].pcount,
                newBusinessPremium: res.datum.productsList[i].premium,
                productDistribution: this.productDistribution(res.datum.productsList[i].pcount, this.totalNewBusinessCase),
                averageCaseSize: this.averageCaseSize(res.datum.productsList[i].premium, res.datum.productsList[i].pcount)

              }
              this.displayDataList.push(obj);
            }
            this.roundTotalProductDistribution = this.mathRoundTo(this.totalProductDistribution, 2)
            this.roundTotalProductDistribution = this.mathRoundTo(this.totalProductDistribution, 2)
            this.roundTotalAverageCaseSize = this.mathRoundTo(this.totalAverageCaseSize, 2)

            if (this.keyDriver.manPower) {
              this.activeRatio = this.mathRoundTo(this.keyDriver.activeManPower / this.keyDriver.manPower, 2);
            }

            if (this.keyDriver.activeManPower) {
              this.productivity = this.mathRoundTo(this.totalNewBusinessCase / this.keyDriver.activeManPower, 2)
            }

            if (this.keyDriver.manPower) {
              this.channelProductivity = this.mathRoundTo(this.totalNewBusinessCase / this.keyDriver.manPower, 2)
            }

            if (this.totalNewBusinessCase != 0) {
              this.anpCaseSize = this.mathRoundTo(this.totalPremium / this.totalNewBusinessCase, 2)
            }

            if (this.totalNewBusinessCase != 0) {
              this.monthlyCaseSize = this.mathRoundTo((this.totalPremium / 12) / this.totalNewBusinessCase, 2)
            }
          }
        }
      });
    }
    this.cdf.detectChanges();
  }

  productDistribution(newBusinessCase, totalNewBusinessCase) {
    let returnValue: any;
    if (totalNewBusinessCase != 0) {
      returnValue = this.mathRoundTo(newBusinessCase * 100 / totalNewBusinessCase, 2);
    } else {
      returnValue = 0;
    }
    this.totalProductDistribution += Number(returnValue);
    return returnValue;
  }

  averageCaseSize(premium, newBusinessCase) {
    let returnValue: any;
    if (newBusinessCase != 0) {
      returnValue = this.mathRoundTo(premium / newBusinessCase, 2);
    } else {
      returnValue = 0;
    }
    this.totalAverageCaseSize += Number(returnValue);
    return returnValue;
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
    this.productValues = ['Product', 'New Business Case', 'New Business Premium	',
      'Product Distribution', 'Average Case Size'];

    // Data
    for (var i = 0; i < this.displayDataList.length; i++) {
      this.dataExcel.push([
        this.displayDataList[i].product,
        this.displayDataList[i].newBusinessCase,
        this.displayDataList[i].newBusinessPremium,
        this.displayDataList[i].productDistribution,
        this.displayDataList[i].averageCaseSize,
      ]);
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
      subHeader: this.subHeader,
      data: this.dataExcel,
      totalNewBusinessCase: this.totalNewBusinessCase,
      totalPremium: this.totalPremium,
      roundTotalProductDistribution: this.roundTotalProductDistribution,
      roundTotalAverageCaseSize: this.roundTotalAverageCaseSize,
      manPower: this.keyDriver.manPower,
      activeManPower: this.keyDriver.activeManPower,
      activeRatio: this.activeRatio,
      productivity: this.productivity,
      channelProductivity: this.channelProductivity,
      anpCaseSize: this.anpCaseSize,
      monthlyCaseSize: this.monthlyCaseSize
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
