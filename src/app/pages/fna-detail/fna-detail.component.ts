import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter2, CustomDateParserFormatter } from 'src/app/_metronic/core';
import { AssectDto } from './asset/asset-manage.dto';
import { ProductDto } from './chart-analysis/product-analysis/product-manage.dto';
import { EducationDto } from './education/education-manage.dto';
import { FNAConstant } from './fna-constant';
import { FnaDataViewComponent } from './fna-data-view/fna-data-view.component';
import { FANService } from './fna-manage.service';
import { HealthDto } from './health/health-manage.dto';
import { IncomeDto } from './income/income-manage.dto';
import { RetirementDto } from './retirement/retirement-manage.dto';

@Component({
  selector: 'app-fna-detail',
  templateUrl: './fna-detail.component.html',
  styleUrls: ['./fna-detail.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter2 },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class FnaDetailComponent implements OnInit {
  pageStatus: any;
  fnaSwitch: string = 'aboutLLP';
  selected: string = '';
  product = {
    id: 123
  };
  education = {}
  health = {}
  income = {}
  retirement = {}
  asset = {}
  freedom = [];
  oldId: any;
  fnaIncome = null;
  fnaAssets = [];
  fnaEducations = null;
  aboutLLP: any;
  bgColor: string = 'progress-middle';
  percentage = '';
  totalPercentage: number = 0;
  fnaHealths = [];
  fnaRetirementSaving = null;
  fnaProduct = [];
  passValue = { customerName: '', customerDob: '', conductedBy: '', createdAt: '', createdByName: '',leadId: ""  };
  percentageText: number = 0;
  totalPercentageText: string = '';
  fnaTextColor: number;
  isValue: boolean;
  customerId: any;


  constructor(private route: ActivatedRoute,
    private modalService: NgbModal, public datepipe: DatePipe,
    private cdf: ChangeDetectorRef, private fnaService: FANService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      let data = JSON.parse(params.passValue);
      console.log('data', data);

      this.passValue = data;
      this.oldId = data.fnaId;
      this.customerId = data.customerId;
      this.aboutLLP = this.oldId;
      if (data.pageStatus != 'create') {
        if (this.oldId) {
          await this.getFNAById();
        }
      }
      this.passValue.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValue.createdAt)), 'dd/MM/yyyy');
    }
    );

    // this.route.queryParams.subscribe(async params => {
    //   this.pageStatus = params.pageStatus;
    //   if (params.passValue) {
    //     this.passValue = JSON.parse(params.passValue);
    //     this.passValue.createdAt = this.datepipe.transform(this.formatDateYYYYMMDD(this.convertDateFormatDDMMYYY(this.passValue.createdAt)), 'MM/dd/yyyy');
    //   }
    //   if (this.pageStatus != 'create') {
    //     this.oldId = params.pageId;
    //     this.aboutLLP = this.oldId;
    //     if (this.oldId) {
    //       await this.getFNAById();
    //     }
    //   }
    // }
    // );
  }

  async getFNAById() {
    this.isValue = false;
    this.fnaProduct = [];
    this.fnaService.fnaUpdateProducts = [];
    this.fnaService.fnaIncome = new IncomeDto();
    this.fnaService.fnaRetirementSaving = new RetirementDto();
    this.fnaService.fnaHealths = new Array<HealthDto>();
    this.fnaService.fnaEducations = new Array<EducationDto>();
    this.fnaService.fnaAssect = new Array<AssectDto>();
    this.fnaService.fnaProduct = new Array<ProductDto>();
    this.fnaService.percentage = '';
    this.fnaService.totalPercentageText = '';
    this.fnaService.bgColor = '';
    this.fnaService.fnaUpdateProducts = new Array<any>();
    this.fnaService.fnaTextColor = null;
    await this.fnaService.findOne(this.oldId).toPromise().then(res => {
      console.log('getFNAById', res);

      if (res) {
        if (res.fnaAssets.length > 0 && res.fnaEducations.length &&
          res.fnaHealths.length > 0 && res.fnaIncome != null &&
          res.fnaRetirementSaving != null) {
          this.freedom.push({ hasData: true })
        }

        this.fnaIncome = res.fnaIncome;
        this.fnaService.fnaIncome = res.fnaIncome;

        this.fnaRetirementSaving = res.fnaRetirementSaving;
        this.fnaService.fnaRetirementSaving = this.fnaRetirementSaving;

        this.fnaHealths = res.fnaHealths;
        this.fnaService.fnaHealths = this.fnaHealths;

        this.fnaAssets = res.fnaAssets;
        this.fnaService.fnaAssect = this.fnaAssets;

        this.fnaProduct = res.products;
        this.fnaService.fnaProduct = this.fnaProduct;

        this.fnaEducations = res.fnaEducations;
        if (this.fnaEducations.length == 0) {
          this.fnaService.fnaHealths = this.fnaHealths;
          this.fnaService.fnaEducations = [];
        } else {
          this.fnaService.fnaEducations = this.fnaEducations;
          this.fnaService.fnaHealths = [];
        }

        this.fnaService.fnaUpdateProducts = this.fnaProduct;

        if (this.fnaAssets.length > 0) {
          this.totalPercentage += 20
        }
        if (this.fnaEducations.length > 0) {
          this.totalPercentage += 20
        }
        if (this.fnaHealths.length > 0) {
          this.totalPercentage += 20
        }

        if (this.fnaIncome) {
          this.totalPercentage += 20
        }

        if (this.fnaRetirementSaving) {
          this.totalPercentage += 20
        }

        this.percentage = this.totalPercentage.toString() + '%';

        if (this.totalPercentage == 20 || this.totalPercentage == 40 ||
          this.totalPercentage == 60 || this.totalPercentage == 80 || this.totalPercentage == 100) {
          this.percentageText = -50;
        }

        this.totalPercentageText = this.percentageText.toString() + '%';

        if (this.totalPercentage == 0) {
          this.bgColor = 'progress-lower';
          this.fnaTextColor = null;
        } else if (this.totalPercentage == 100) {
          this.bgColor = 'progress-upper';
          this.fnaTextColor = 100;
        } else {
          this.bgColor = 'progress-middle'
          this.fnaTextColor = null;
        }
      }
      this.cdf.detectChanges();
      this.isValue = true;
    });
  }



  public fnaEvent(event: any): void {
    if (event == 'product' || event == 'aboutLLP') {
      this.fnaSwitch = event;
      this.selected = '';
      this.percentage = this.fnaService.percentage;
      this.totalPercentageText = this.fnaService.totalPercentageText;
      this.bgColor = this.fnaService.bgColor;
      this.fnaTextColor = this.fnaService.fnaTextColor;
    } else {
      this.selected = event
      this.fnaSwitch = event;
    }

  }

  public changeProduct(event: any): void {
    this.fnaSwitch = event;
  }

  async saveFNA() {
    await this.fnaService.saveFNA('').toPromise().then(res => {
      if (res) {
        this.pageStatus = 'edit'
        this.oldId = res;
        this.aboutLLP = this.oldId
      }
    });
  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  convertDateFormatDDMMYYY(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  }

}
