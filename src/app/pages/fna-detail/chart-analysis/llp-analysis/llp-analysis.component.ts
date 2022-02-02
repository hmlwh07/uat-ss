import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FANService } from '../../fna-manage.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-llp-analysis',
  templateUrl: './llp-analysis.component.html',
  styleUrls: ['./llp-analysis.component.scss']
})
export class LlpAnalysisComponent implements OnInit {
  @Input() aboutLLP: any = null;
  @Input() customerId: any = null;

  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  fnaSwitch: any;
  oldId: any;
  fnaEducations = [];
  fnaRetirementSaving = null;
  fnaIncome = null;
  fnaHealths = [];
  fnaAssets = [];
  freedom = [];
  fnaProduct = [];
  bgColor: string = 'progress-middle';
  percentage = '';
  totalPercentage: number = 0;
  percentageText: number = 0;
  totalPercentageText: string = '';
  products = [];
  fnaTextColor: number;
  isValue: boolean = false;

  constructor(private fnaService: FANService, private cdf: ChangeDetectorRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.oldId = this.aboutLLP;
    if (this.fnaService.fnaUpdateProducts) {
      this.products = this.fnaService.fnaUpdateProducts;
    }
    if (this.oldId) {
      this.getFNAById();
    }
  }


  async getFNAById() {
    this.isValue = false;
    this.fnaService.fnaEducations = [];
    this.fnaService.fnaHealths = [];
    await this.fnaService.findOne(this.oldId).toPromise().then(res => {
      if (res) {
        if (res.fnaAssets.length > 0 && res.fnaEducations.length &&
          res.fnaHealths.length > 0 && res.fnaIncome != null &&
          res.fnaRetirementSaving != null) {
          this.freedom.push({ hasData: true })
        }

        this.fnaIncome = res.fnaIncome;
        this.fnaService.fnaIncome = this.fnaIncome;

        this.fnaRetirementSaving = res.fnaRetirementSaving;
        this.fnaService.fnaRetirementSaving = this.fnaRetirementSaving;

        this.fnaHealths = res.fnaHealths;
        this.fnaService.fnaHealths = this.fnaHealths;

        this.fnaProduct = res.products;
        this.fnaService.fnaProduct = this.fnaProduct;

        this.fnaEducations = res.fnaEducations;
        if (this.fnaEducations.length == 0) {
          this.fnaService.fnaHealths = this.fnaHealths;
        } else {
          this.fnaService.fnaEducations = this.fnaEducations;
        }

        this.fnaAssets = res.fnaAssets;
        this.fnaService.fnaAssect = this.fnaAssets;

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

        this.fnaService.percentage = this.percentage;
        this.fnaService.totalPercentageText = this.totalPercentageText;
        this.fnaService.bgColor = this.bgColor;
        this.fnaService.fnaTextColor = this.fnaTextColor;

        this.change.emit('aboutLLP');

        this.cdf.detectChanges()
      }
      this.isValue = true;
    })
  }

  fnaSwitchEvent(type) {
    if (this.isValue) {
      this.fnaSwitch = type;
      this.change.emit(type);
      if (this.products.length > 0) {
        this.update();
      }
    }
  }

  actionChart(type) {
   
  }


  async update() {
    this.products = this.removeDuplicates(this.products);
    this.fnaService.fnaUpdateProducts.concat(this.products);


    let reqBody = {
      customerId: this.customerId,
      fnaType: "LPP",
      grandDiscount: 0,
      highDiscount: 0,
      id: this.oldId,
      products: this.products
    }

    await this.fnaService.updateFNAProduct(reqBody).toPromise().then((res: any) => {
      if (res) {

      }
    });
  }

  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }

}
