import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
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
  displayDataList = [];
  totalAverageCaseSize: number = 0;
  totalProductDistribution: number = 0;
  roundTotalProductDistribution: number = 0;
  roundTotalAverageCaseSize: number = 0;
  totalNewBusinessCase: number = 0;
  totalPremium: number = 0;
  keyDriver: any;
  activeRatio: number = 0;
  title: string = 'Key Driver Report';
  productivity: number = 0;
  channelProductivity: number = 0;
  anpCaseSize: number = 0;
  monthlyCaseSize: number = 0;
  selectedPeople = [];
  productName: string = 'All';

  constructor(private cdf: ChangeDetectorRef,
    public exportService: ReportKeyDriverExportService) { }


  ngOnInit(): void {
    this.loadForm();
    this.getOfficeHirearchy();
    this.getAllProducts();
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

  async getAllProducts() {
    await this.exportService.getAllProducts().toPromise().then(async (res: any) => {
      if (res) {
        res.push({ statusCd: '02', statusValue: 'Active', name: 'All', code: 'All' });
        this.productList = res;
        this.productList = this.productList.filter(
          obj => obj.statusCd === "02" && obj.statusValue === "Active").reverse();
      }
    });
  }


  async getAllReports() {
    this.totalNewBusinessCase = 0;
    this.totalPremium = 0;
    this.totalProductDistribution = 0;
    this.totalAverageCaseSize = 0;
    this.keyDriver = {};
    this.displayDataList = [];
    this.roundTotalProductDistribution = 0;
    this.roundTotalAverageCaseSize = 0;
    this.activeRatio = 0;
    this.productivity = 0;
    this.channelProductivity = 0;
    this.anpCaseSize = 0;
    this.monthlyCaseSize = 0;


    if (this.createFormGroup.invalid) {
      validateAllFields(this.createFormGroup);
    } else {
      if (!this.createFormGroup.value.productCodes) {
        this.createFormGroup.value.productCodes = "All";
      }
      await this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(async (res: any) => {
        if (res) {
          this.keyDriver = res
          if (res.productsList.length > 0) {
            this.isData = true;
            for (var i = 0; i < res.productsList.length; i++) {
              this.totalNewBusinessCase += res.productsList[i].pcount;
              this.totalPremium += res.productsList[i].premium;
            }
            for (var i = 0; i < res.productsList.length; i++) {
              let obj = {
                product: res.productsList[i].name,
                newBusinessCase: res.productsList[i].pcount,
                newBusinessPremium: res.productsList[i].premium,
                productDistribution: this.productDistribution(res.productsList[i].pcount, this.totalNewBusinessCase),
                averageCaseSize: this.averageCaseSize(res.productsList[i].premium, res.productsList[i].pcount)

              }
              this.displayDataList.push(obj);
            }
            this.roundTotalProductDistribution = this.totalProductDistribution
            //this.roundTotalProductDistribution = this.totalProductDistribution
            this.roundTotalAverageCaseSize = this.totalAverageCaseSize

            if (this.keyDriver.manPower) {
              this.activeRatio = this.keyDriver.activeManPower / this.keyDriver.manPower
            }

            if (this.keyDriver.activeManPower) {
              this.productivity = this.totalNewBusinessCase / this.keyDriver.activeManPower
            }

            if (this.keyDriver.manPower) {
              this.channelProductivity = this.totalNewBusinessCase / this.keyDriver.manPower
            }

            if (this.totalNewBusinessCase != 0) {
              this.anpCaseSize = this.totalPremium / this.totalNewBusinessCase
            }

            if (this.totalNewBusinessCase != 0) {
              this.monthlyCaseSize = (this.totalPremium / 12) / this.totalNewBusinessCase
            }
          } else {
            this.isData = false
          }
        }
      });
    }
    this.cdf.detectChanges();
  }

  productDistribution(newBusinessCase, totalNewBusinessCase) {
    let returnValue: any;
    if (totalNewBusinessCase != 0) {
      returnValue = newBusinessCase * 100 / totalNewBusinessCase
    } else {
      returnValue = 0;
    }
    this.totalProductDistribution += Number(Math.round(returnValue));
    return returnValue;
  }

  averageCaseSize(premium, newBusinessCase) {
    let returnValue: any;
    if (newBusinessCase != 0) {
      returnValue = premium / newBusinessCase
    } else {
      returnValue = 0;
    }
    this.totalAverageCaseSize += Number(returnValue);
    return returnValue;
  }

  calculateDivision(value, divided) {
    let returnValue: any;
    if (divided != 0) {
      returnValue = value / divided
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
        this.displayDataList[i].newBusinessCase || 0.00,
        this.displayDataList[i].newBusinessPremium || 0.00,
        Number(Math.round(this.displayDataList[i].productDistribution)) || 0.00,
        //this.displayDataList[i].productDistribution || 0.00,
        this.displayDataList[i].averageCaseSize || 0.00,
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
        { branchName: this.branchName },
        { productName: this.productName },

      ],
      products: this.productValues,
      subHeader: this.subHeader,
      data: this.dataExcel,
      totalNewBusinessCase: this.totalNewBusinessCase || 0.00,
      totalPremium: this.totalPremium || 0.00,
      roundTotalProductDistribution: this.roundTotalProductDistribution || 0.00,
      roundTotalAverageCaseSize: this.roundTotalAverageCaseSize || 0.00,
      manPower: this.keyDriver.manPower || 0.00,
      activeManPower: this.keyDriver.activeManPower || 0.00,
      activeRatio: this.activeRatio || 0.00,
      productivity: this.productivity || 0,
      channelProductivity: this.channelProductivity || 0.00,
      anpCaseSize: this.anpCaseSize || 0.00,
      monthlyCaseSize: this.monthlyCaseSize || 0.00
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
    this.totalNewBusinessCase = 0;
    this.totalPremium = 0;
    this.totalProductDistribution = 0;
    this.totalAverageCaseSize = 0;
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
    this.getAllReports();
    this.cdf.detectChanges()
  }

  changeProductOptions(ev) {
    if (ev.name) {
      this.productName = ev.name
    }
    this.getAllReports();
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
      "branchId": new FormControl(''),
      "productCodes": new FormControl('All')
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

        if (diffYear == 0) {
          if (formDateSplit[1] > toDateSplit[1]) {
            this.createFormGroup.controls['toDate'].setValue('');
          }
          if (formDateSplit[1] == toDateSplit[1]) {
            if (formDateSplit[2] > toDateSplit[2]) {
              this.createFormGroup.controls['toDate'].setValue('');
            }
          }
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

        if (diffYear == 0) {
          if (formDateSplit[1] > toDateSplit[1]) {
            this.createFormGroup.controls['toDate'].setValue('');
          }
          if (formDateSplit[1] == toDateSplit[1]) {
            if (formDateSplit[2] > toDateSplit[2]) {
              this.createFormGroup.controls['toDate'].setValue('');
            }
          }
        }
      }

      if (toDateValue) {
        var fromDate = new Date(toDateValue);
        fromDate.setFullYear(fromDate.getFullYear() - 1);
        fromDate.setDate(fromDate.getDate() + 1);
        this.fromMinDate = fromDate;
        this.fromMaxDate = new Date(toDateValue);
      }
    }
    this.cdf.detectChanges();
  }

  clearDate(type) {
    // this.fromMinDate = null;
    // this.fromMaxDate = null;
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue('');
      this.doValid('ToDate')
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue('');
      this.doValid('FromDate')
    }
    this.displayDataList = [];
    this.totalNewBusinessCase = 0;
    this.totalPremium = 0;
    this.totalProductDistribution = 0;
    this.totalAverageCaseSize = 0;

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
