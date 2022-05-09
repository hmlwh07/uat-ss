import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FNAProductService } from './product.manage.service';
import { FANService } from '../../fna-detail/fna-manage.service';
import 'jspdf-autotable';
import { AlertService } from '../../../../app/modules/loading-toast/alert-model/alert.service';
import { FNABRAMDiscount } from './product.dto';
import { forkJoin, of } from 'rxjs';
import { CustomerService } from '../../customer-detail/customer.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AttachmentDownloadService } from 'src/app/_metronic/core/services/attachment-data.service';



const header = [
  [{ content: 'Package offer', styles: { halign: 'center', valign: 'middle' } },
  { content: 'Product', styles: { halign: 'center', valign: 'middle' } },
  { content: 'Policies', styles: { halign: 'center', valign: 'middle' } },
  { content: 'SA lakhs', styles: { halign: 'center', valign: 'middle' } },
  { content: 'Annual Premium estimate lakhs', styles: { halign: 'center', valign: 'middle' } },
  { content: 'Monthly Premium estimate lakhs', styles: { halign: 'center', valign: 'middle' } }]
]

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() fnaId: number = null;
  @Input() passValueData: any = null;

  @Output() changeSwitch: EventEmitter<string> = new EventEmitter<string>();
  inputSwitch: string = 'outputs';
  originalData = [
    {
      packageOffer: "High Priority", input: null, product: []
    },
    { packageOffer: 'highTotal', input: null, product: [{ product: 'Total', policies: null, sa: 20, annualRate: 30, monthlyRate: 40, action: '' }] },
    { packageOffer: 'highDiscount', input: 'percent', product: [{ product: 'Discount (%):', policies: '', sa: 'Premium after discount:', annualRate: '', monthlyRate: '', action: '' }] },
    { packageOffer: 'highBlank', input: null, product: [{ product: '', policies: null, sa: '', annualRate: '', monthlyRate: '', action: '' }] },
    {
      packageOffer: "Less Priority", product: []
    },
    { packageOffer: 'mediumTotal', product: [{ product: 'Total', policies: 10, sa: 20, annualRate: 30, monthlyRate: 40, action: '' }] },
    //{ packageOffer: 'two', product: [{ product: 'Discount (%):', policies: null, sa: 'Premium after discount:', annualRate: 221, monthlyRate: 18, action: '' }] },
    { packageOffer: 'mediumBlank', product: [{ product: '', policies: null, sa: '', annualRate: '', monthlyRate: '', action: '' }] }
  ]
  dataSource = this.originalData;
  displayedColumns = ['packageOffer', 'product', 'policies', 'sa', 'annualRate', 'monthlyRate', 'action'];
  spans = [];
  @ViewChild('htmlData') htmlData: ElementRef;
  isBorder: boolean = true;
  tableHeight = [];
  totalHeight: number = 0;
  grantTotalList = [];
  productList: any = null;
  totalHighAnnualRate: number = 0;
  totalHighMonthlyRate: number = 0;
  highAnnualPercentageRate: number;
  highMonthlyPercentageRate: number;
  grantAnnualPercentageRate: number;
  grantMonthlyPercentageRate: number;
  totalGrantAnnualRate: any;
  totalGrantMonthlyRate: any;
  highPercent: number = null;
  grantPercent: number = null;
  isData: boolean;
  updateProducts = [];

  constructor(private productService: FNAProductService, private productDataService: ProductDataService,
    private cdf: ChangeDetectorRef, private customerService: CustomerService, private router: Router,
    private fnaService: FANService, private alertService: AlertService,
    public platform: Platform, private attachmentDownloadService: AttachmentDownloadService) {

  }

  async ngOnInit() {
    await this.getAllProductRec();
    await this.cacheSpan('packageOffer', d => d.packageOffer);
    await this.cacheSpan('product', d => d.product);
    //this.cacheSpan('policies', d => d.policies);
  }

  fnaSwitchEvent(type) {
    if (type == 'aboutBRAM' && (this.productList.highRisk.length > 0 || this.productList.lessRisk.length > 0)) {
      this.updatePercentage(type);
    } else {
      this.inputSwitch = type;
      this.changeSwitch.emit(type);
    }
  }

  cacheSpan(key, accessor) {
    for (let i = 0; i < this.dataSource.length;) {
      let currentValue = accessor(this.dataSource[i]);
      let count = 1;
      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < this.dataSource.length; j++) {
        if (currentValue != accessor(this.dataSource[j])) {
          break;
        }
        count++;
      }
      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }

  buyProduct(product) {
    forkJoin([this.productDataService.findOne(product.productId), this.customerService.findOne(this.passValueData.customerId || 1).pipe(catchError(e => { return of(undefined) }))]).toPromise().then((res) => {
      if (res) {
        this.productDataService.createingProd = res[0]
        this.productDataService.creatingCustomer = res[1]
        this.productDataService.type = "CLFR01" || res[0].code == "PLMO02" || res[0].code == "PLTR01" ? 'policy' : 'quotation'
        this.productDataService.viewType = "CLFR01" || res[0].code == "PLMO02" || res[0].code == "PLTR01" ? 'policy' : 'quotation'
        this.productDataService.referenceID = null
        this.productDataService.creatingLeadId = this.passValueData.leadId
        this.router.navigateByUrl("/product-form")
      }
    })
  }

  async getAllProductRec() {
    let totalHighPolicies: number = 0;
    let totalHighSa: number = 0;
    let totalHighAnnualRate: number = 0;
    let totalHighMonthlyRate: number = 0;
    let totalLessPolicies: number = 0;
    let totalLessSa: number = 0;
    let totalLessAnnualRate: number = 0;
    let totalLessMonthlyRate: number = 0;
    let nameList = []
    //472
    await this.productService.getAllProductRec(this.fnaId).toPromise().then(async (res: any) => {
      // console.log('getAllProductRec', res);
      this.productList = res;
      if (res.highRisk.length > 0 || res.lessRisk.length > 0) {
        this.isData = true;
      }
      if (res.highRisk.length > 0) {
        for (var i = 0; i < res.highRisk.length; i++) {
          if (res.highRisk[i].productCode) {
            this.updateProducts.push(res.highRisk[i].productCode);
          }
          nameList.push(res.highRisk[i].product)
          if (res.highRisk[i].policies) {
            res.highRisk[i].policies = Number(res.highRisk[i].policies);
            totalHighPolicies += res.highRisk[i].policies;
          }
          if (res.highRisk[i].sa) {
            res.highRisk[i].sa = Number(res.highRisk[i].sa);
            totalHighSa += res.highRisk[i].sa;
          }
          if (res.highRisk[i].annualRate) {
            res.highRisk[i].annualRate = Number(res.highRisk[i].annualRate);
            totalHighAnnualRate += res.highRisk[i].annualRate;
            this.totalHighAnnualRate = totalHighAnnualRate
          }
          if (res.highRisk[i].monthlyRate) {
            res.highRisk[i].monthlyRate = Number(res.highRisk[i].monthlyRate);
            totalHighMonthlyRate += res.highRisk[i].monthlyRate;
            this.totalHighMonthlyRate = totalHighMonthlyRate
          }

          // Fire, Motor, Personal Accident
          if (res.highRisk[i].productCode == 'CLFR01' || res.highRisk[i].productCode == 'PLMO02' ||
            res.highRisk[i].productCode == 'PLPA01' || res.highRisk[i].productCode == 'PCPA01') {
            res.highRisk[i].action = 'Buy';
          } else {
            res.highRisk[i].action = '';
          }

        }
      } else {
        res.highRisk = [];
      }

      if (res.lessRisk.length > 0) {
        for (var i = 0; i < res.lessRisk.length; i++) {
          if (res.lessRisk[i].productCode) {
            this.updateProducts.push(res.lessRisk[i].productCode);
          }
          nameList.push(res.lessRisk[i].product)
          if (res.lessRisk[i].policies) {
            res.lessRisk[i].policies = Number(res.lessRisk[i].policies);
            totalLessPolicies += res.lessRisk[i].policies
          }
          if (res.lessRisk[i].sa) {
            res.lessRisk[i].sa = Number(res.lessRisk[i].sa);
            totalLessSa += res.lessRisk[i].sa
          }
          if (res.lessRisk[i].annualRate) {
            res.lessRisk[i].annualRate = Number(res.lessRisk[i].annualRate);
            totalLessAnnualRate += res.lessRisk[i].annualRate
          }
          if (res.lessRisk[i].monthlyRate) {
            res.lessRisk[i].monthlyRate = Number(res.lessRisk[i].monthlyRate);
            totalLessMonthlyRate += res.lessRisk[i].monthlyRate
          }

          // Fire, Motor, Personal Accident
          if (res.lessRisk[i].productCode == 'CLFR01' || res.lessRisk[i].productCode == 'PLMO02' ||
            res.lessRisk[i].productCode == 'PLPA01' || res.lessRisk[i].productCode == 'PCPA01') {
            res.lessRisk[i].action = 'Buy';
          } else {
            res.lessRisk[i].action = '';
          }

        }
      } else {
        res.lessRisk = []
      }

      this.originalData[0].product = res.highRisk
      this.originalData[4].product = res.lessRisk
      let tempList = res.highRisk.concat(res.lessRisk);
      this.originalData[1].product[0].policies = totalHighPolicies;
      this.originalData[1].product[0].sa = totalHighSa;
      this.originalData[1].product[0].annualRate = totalHighAnnualRate;
      this.originalData[1].product[0].monthlyRate = totalHighMonthlyRate;
      this.originalData[5].product[0].policies = totalLessPolicies;
      this.originalData[5].product[0].sa = totalLessSa;
      this.originalData[5].product[0].annualRate = totalLessAnnualRate;
      this.originalData[5].product[0].monthlyRate = totalLessMonthlyRate;

      nameList = nameList.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });

      for (var j = 0; j < nameList.length; j++) {
        let grantPolicies: number = null;
        let grantSa: number = null;
        let grantAnnualRate: number = null;
        let grantMonthlyRate: number = null;
        for (var i = 0; i < tempList.length; i++) {
          if (tempList[i].product == nameList[j]) {
            if (tempList[i].policies) {
              grantPolicies += tempList[i].policies;
            }
            if (tempList[i].sa) {
              grantSa += tempList[i].sa;
            }
            if (tempList[i].annualRate) {
              grantAnnualRate += tempList[i].annualRate;
            }
            if (tempList[i].monthlyRate) {
              grantMonthlyRate += tempList[i].monthlyRate;
            }
          }
        }
        this.grantTotalList.push({
          product: nameList[j], policies: grantPolicies,
          sa: grantSa, annualRate: grantAnnualRate, monthlyRate: grantMonthlyRate
        });
      }

      let totalGrantPolicies: number = 0;
      let totalGrantSa: number = 0;
      let totalGrantAnnualRate: number = 0;
      let totalGrantMonthlyRate: number = 0;
      if (this.grantTotalList.length > 0) {
        for (var i = 0; i < this.grantTotalList.length; i++) {
          let grantPolicies: number = 0;
          let grantSa: number = 0;
          let grantAnnualRate: number = 0;
          let grantMonthlyRate: number = 0;
          grantPolicies += this.grantTotalList[i].policies
          grantSa += this.grantTotalList[i].sa
          grantAnnualRate += this.grantTotalList[i].annualRate
          grantMonthlyRate += this.grantTotalList[i].monthlyRate

          this.grantTotalList[i].grantPolicies = grantPolicies
          this.grantTotalList[i].grantSa = grantSa
          this.grantTotalList[i].grantAnnualRate = grantAnnualRate
          this.grantTotalList[i].grantMonthlyRate = grantMonthlyRate
        }
      }

      for (var i = 0; i < this.grantTotalList.length; i++) {
        let packageOffer: string = 'one'
        if (i % 2 == 0) {
          packageOffer = 'two'
        } else {
          packageOffer = 'three'
        }
        if (i == 0) {
          packageOffer = 'Grand Total'
        }

        totalGrantPolicies += this.grantTotalList[i].grantPolicies;
        totalGrantSa += this.grantTotalList[i].grantSa;
        totalGrantAnnualRate += this.grantTotalList[i].grantAnnualRate;
        totalGrantMonthlyRate += this.grantTotalList[i].grantMonthlyRate;

        this.totalGrantAnnualRate = totalGrantAnnualRate;
        this.totalGrantMonthlyRate = totalGrantMonthlyRate;

        if (this.grantTotalList[i].productCode == 'CLFR01' || this.grantTotalList[i].productCode == 'PLMO02' ||
          this.grantTotalList[i].productCode == 'PLPA01' || this.grantTotalList[i].productCode == 'PCPA01') {
          this.grantTotalList[i].action = 'Buy';
        } else {
          this.grantTotalList[i].action = '';
        }


        let data = {
          packageOffer: packageOffer, product: [
            {
              product: this.grantTotalList[i].product, policies: this.grantTotalList[i].grantPolicies || null,
              sa: this.grantTotalList[i].grantSa || '', annualRate: this.grantTotalList[i].grantAnnualRate || '',
              monthlyRate: this.grantTotalList[i].grantMonthlyRate || '', action: this.grantTotalList[i].action
            }]
        }

        this.originalData.push(data)
      }
      this.originalData.push({
        packageOffer: 'total', product: [
          {
            product: 'Total', policies: totalGrantPolicies || null, sa: totalGrantSa || null,
            annualRate: totalGrantAnnualRate || null, monthlyRate: totalGrantMonthlyRate || null, action: ''
          }]
      })
      this.originalData.push({
        packageOffer: 'discount', input: 'percent', product: [
          {
            product: 'Discount (%):', policies: null, sa: 'Premium after discount:',
            annualRate: '', monthlyRate: '', action: ''
          }]
      })

      if (res.highRisk.length == 0) {
        for (var i = 0; i < this.originalData.length; i++) {
          if (this.originalData[i].packageOffer == 'High Priority') {
            this.originalData.splice(i, 1);
          }
          if (this.originalData[i].packageOffer == 'highTotal') {
            this.originalData.splice(i, 1);
          }
          if (this.originalData[i].packageOffer == 'highDiscount') {
            this.originalData.splice(i, 1);
          }
          if (this.originalData[i].packageOffer == 'highBlank') {
            this.originalData.splice(i, 1);
          }
        }
      }


      if (res.lessRisk.length == 0) {
        for (var i = 0; i < this.originalData.length; i++) {
          if (this.originalData[i].packageOffer == 'Less Priority') {
            this.originalData.splice(i, 1);
          }
          if (this.originalData[i].packageOffer == 'mediumTotal') {
            this.originalData.splice(i, 1);
          }
          if (this.originalData[i].packageOffer == 'mediumBlank') {
            this.originalData.splice(i, 1);
          }
        }
      }


      if (this.passValueData.highDiscount) {
        let highDiscount: number = 0;
        if (FNABRAMDiscount.HIGH_DISCOUNT != 0) {
          highDiscount = FNABRAMDiscount.HIGH_DISCOUNT
        } else {
          highDiscount = this.passValueData.highDiscount
        }
        this.updateCommaInput(highDiscount, 'highDiscount');
      }
      if (this.passValueData.grandDiscount) {
        let grandDiscount: number = 0;
        if (FNABRAMDiscount.GRAND_DISCOUNT != 0) {
          grandDiscount = FNABRAMDiscount.GRAND_DISCOUNT
        } else {
          grandDiscount = this.passValueData.grandDiscount
        }
        this.updateCommaInput(grandDiscount, 'discount');
      }

      this.dataSource = this.originalData.reduce((current, next) => {
        next.product.forEach(b => {


          current.push({
            packageOffer: next.packageOffer, input: next.input, product: b.product, policies: b.policies,
            sa: this.fnaService.currencyFormat(Number(b.sa)),
            annualRate: this.fnaService.currencyFormat(Number(b.annualRate)),
            monthlyRate: this.fnaService.currencyFormat(Number(b.monthlyRate)), action: b.action
          })
        });
        return current;
      }, []);

    });
    this.cdf.detectChanges();
  }


  async openPDF() {
    this.isBorder = false;
    if (!this.isBorder) {
      let DATA = document.getElementById('htmlData');
      var btn = document.createElement("BUTTON");
      btn.innerHTML = "CLICK ME";
      document.body.appendChild(btn);
      await html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 30;
        PDF.addImage(FILEURI, 'PNG', 1, position, fileWidth, fileHeight - 20)
        PDF.setFontSize(10);
        PDF.text("Quotation Form", 120, 7);
        PDF.setFontSize(9);
        PDF.text("Client Name", 0, 15);
        PDF.setFontSize(9);
        PDF.text("Si Thu Win", 30, 15);
        PDF.setFontSize(9);
        PDF.text("Quotation Date", 110, 15);
        PDF.setFontSize(9);
        PDF.text("12/29/2021", 150, 15);
        PDF.setFontSize(10);
        PDF.text("Summary of Quotation", 0, 25).setFontSize(9).setFont(undefined, undefined, 'bold');
        PDF.text("Details", 0, fileHeight + 5).setFontSize(10).setFont(undefined, undefined, 'bold');
        PDF.text("Details", 70, fileHeight + 15).setFontSize(10).setFont(undefined, undefined, 'bold');


        PDF.save('angular-demo.pdf');
        this.isBorder = true;

      });
    }

  }


  updateCommaInput(percent, type) {
    if (type == 'highDiscount') {
      // High Priority Discount
      this.highPercent = percent;
      this.highAnnualPercentageRate = this.calculatePercentage(Number(percent), Number(this.totalHighAnnualRate));
      this.highMonthlyPercentageRate = this.calculatePercentage(Number(percent), Number(this.totalHighMonthlyRate));


      this.originalData[2].input = 'percent';
      this.originalData[2].product[0].policies = Number(percent);
      if (this.highAnnualPercentageRate == 0) {
        this.originalData[2].product[0].annualRate = null;
      } else {
        this.originalData[2].product[0].annualRate = this.highAnnualPercentageRate;
      }

      if (this.highAnnualPercentageRate == 0) {
        this.originalData[2].product[0].monthlyRate = null;
      } else {
        this.originalData[2].product[0].monthlyRate = this.highMonthlyPercentageRate;
      }

    } else {
      // Grand Total Discount    
      this.grantPercent = percent;
      this.grantAnnualPercentageRate = this.calculatePercentage(Number(percent), Number(this.totalGrantAnnualRate));
      this.grantMonthlyPercentageRate = this.calculatePercentage(Number(percent), Number(this.totalGrantMonthlyRate));

      this.originalData[this.originalData.length - 1].product[0].policies = Number(percent);
      if (this.grantAnnualPercentageRate == 0) {
        this.originalData[this.originalData.length - 1].product[0].annualRate = null;
      } else {
        this.originalData[this.originalData.length - 1].product[0].annualRate = this.grantAnnualPercentageRate;
      }

      if (this.grantMonthlyPercentageRate == 0) {
        this.originalData[this.originalData.length - 1].product[0].monthlyRate = null;
      } else {
        this.originalData[this.originalData.length - 1].product[0].monthlyRate = this.grantMonthlyPercentageRate;
      }
    }


    this.dataSource = this.originalData.reduce((current, next) => {
      next.product.forEach(b => {
        current.push({
          packageOffer: next.packageOffer, product: b.product, input: next.input, policies: b.policies,
          sa: this.fnaService.currencyFormat(Number(b.sa)),
          annualRate: this.fnaService.currencyFormat(Number(b.annualRate)),
          monthlyRate: this.fnaService.currencyFormat(Number(b.monthlyRate)), action: b.action
        })
      });
      return current;
    }, []);

    this.cdf.detectChanges();
  }


  createPdf() {
    let list = [];
    this.totalHeight = 0;
    let quotationDate: string = '';
    quotationDate = this.formatDateDDMMYYY(new Date());
    this.updatePercentage('PDF');
    let blank = [
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: '', styles: { halign: 'center', valign: 'middle' } }
    ]


    let highPolicies: number = 0;
    let highSa: number = 0;
    let highAnnualRate: number = 0;
    let highMonthlyRate: number = 0;
    for (var i = 0; i < this.productList.highRisk.length; i++) {
      let obj = []
      if (this.productList.highRisk[i].policies) {
        highPolicies += this.productList.highRisk[i].policies;
      }
      if (this.productList.highRisk[i].sa) {
        highSa += this.productList.highRisk[i].sa;
      }

      if (this.productList.highRisk[i].annualRate) {
        highAnnualRate += this.productList.highRisk[i].annualRate;
      }

      if (this.productList.highRisk[i].monthlyRate) {
        highMonthlyRate += this.productList.highRisk[i].monthlyRate;
      }

      obj = [
        { content: 'High Priority', rowSpan: this.productList.highRisk.length, styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } },
        { content: this.productList.highRisk[i].product || '', styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } },
        { content: this.productList.highRisk[i].policies || '', styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } },
        { content: this.productList.highRisk[i].sa ? this.fnaService.currencyFormat(Number(this.productList.highRisk[i].sa)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } },
        { content: this.productList.highRisk[i].annualRate ? this.fnaService.currencyFormat(Number(this.productList.highRisk[i].annualRate)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } },
        { content: this.productList.highRisk[i].monthlyRate ? this.fnaService.currencyFormat(Number(this.productList.highRisk[i].monthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: '#FF0000' } }
      ]
      if (i > 0) {
        obj.splice(0, 1);
      }
      list.push(obj);
    }


    let highRiskTotal = [
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: 'Total', styles: { halign: 'center', valign: 'middle' } },
      { content: highPolicies, styles: { halign: 'center', valign: 'middle' } },
      { content: highSa ? this.fnaService.currencyFormat(Number(highSa)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
      { content: highAnnualRate ? this.fnaService.currencyFormat(Number(highAnnualRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
      { content: highMonthlyRate ? this.fnaService.currencyFormat(Number(highMonthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
    ]

    let highPercent: string = '';
    let highAnnualPercentageRate: string = '';
    let highMonthlyPercentageRate: string = '';
    if (this.highPercent == 0 || this.highPercent == null) {
      highPercent = '';
    } else {
      highPercent = this.highPercent.toString();
    }

    if (this.highAnnualPercentageRate == 0 || this.highAnnualPercentageRate == null) {
      highAnnualPercentageRate = '';
    } else {
      highAnnualPercentageRate = this.highAnnualPercentageRate.toString();
    }

    if (this.highMonthlyPercentageRate == 0 || this.highMonthlyPercentageRate == null) {
      highMonthlyPercentageRate = '';
    } else {
      highMonthlyPercentageRate = this.highMonthlyPercentageRate.toString();
    }

    let highRiskPercent = [
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: 'Discount (%)', styles: { halign: 'center', valign: 'middle' } },
      { content: highPercent, styles: { halign: 'center', valign: 'middle' } },
      { content: 'Premium after discount:', styles: { halign: 'center', valign: 'middle' } },
      { content: highAnnualPercentageRate ? this.fnaService.currencyFormat(Number(this.highAnnualPercentageRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
      { content: highMonthlyPercentageRate ? this.fnaService.currencyFormat(Number(this.highMonthlyPercentageRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
    ]

    if (list.length == this.productList.highRisk.length) {
      if (this.productList.highRisk.length > 0) {
        list.push(highRiskTotal);
        list.push(highRiskPercent);
        list.push(blank);
      }
    }


    let lessPolicies: number = 0;
    let lessSa: number = 0;
    let lessAnnualRate: number = 0;
    let lessMonthlyRate: number = 0;

    for (var i = 0; i < this.productList.lessRisk.length; i++) {
      let obj = []
      if (this.productList.lessRisk[i].policies) {
        lessPolicies += this.productList.lessRisk[i].policies;
      }

      if (this.productList.lessRisk[i].sa) {
        lessSa += this.productList.lessRisk[i].sa;
      }

      if (this.productList.lessRisk[i].annualRate) {
        lessAnnualRate += this.productList.lessRisk[i].annualRate;
      }

      if (this.productList.lessRisk[i].monthlyRate) {
        lessMonthlyRate += this.productList.lessRisk[i].monthlyRate;
      }

      obj = [
        { content: 'Less Priority', rowSpan: this.productList.lessRisk.length, styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } },
        { content: this.productList.lessRisk[i].product || '', styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } },
        { content: this.productList.lessRisk[i].policies || '', styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } },
        { content: this.productList.lessRisk[i].sa ? this.fnaService.currencyFormat(Number(this.productList.lessRisk[i].sa)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } },
        { content: this.productList.lessRisk[i].annualRate ? this.fnaService.currencyFormat(Number(this.productList.lessRisk[i].annualRate)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } },
        { content: this.productList.lessRisk[i].monthlyRate ? this.fnaService.currencyFormat(Number(this.productList.lessRisk[i].monthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle', fillColor: [241, 196, 15] } }
      ]
      if (i > 0) {
        obj.splice(0, 1);
      }
      list.push(obj);
    }

    let lessRiskTotal = [
      { content: '', styles: { halign: 'center', valign: 'middle' } },
      { content: 'Total', styles: { halign: 'center', valign: 'middle' } },
      { content: lessPolicies, styles: { halign: 'center', valign: 'middle' } },
      { content: lessSa ? this.fnaService.currencyFormat(Number(lessSa)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
      { content: lessAnnualRate ? this.fnaService.currencyFormat(Number(lessAnnualRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
      { content: lessMonthlyRate ? this.fnaService.currencyFormat(Number(lessMonthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
    ]

    if (this.productList.lessRisk.length > 0) {
      list.push(lessRiskTotal);
      list.push(blank);
    }


    let grantPolicies: number = 0;
    let grantSa: number = 0;
    let grantAnnualRate: number = 0;
    let grantMonthlyRate: number = 0;
    if (this.grantTotalList.length > 0) {
      for (var i = 0; i < this.grantTotalList.length; i++) {
        if (this.grantTotalList[i].grantPolicies) {
          grantPolicies += this.grantTotalList[i].grantPolicies;
        }

        if (this.grantTotalList[i].grantSa) {
          grantSa += this.grantTotalList[i].grantSa;
        }

        if (this.grantTotalList[i].grantAnnualRate) {
          grantAnnualRate += this.grantTotalList[i].grantAnnualRate;
        }

        if (this.grantTotalList[i].grantMonthlyRate) {
          grantMonthlyRate += this.grantTotalList[i].grantMonthlyRate;
        }

        let packageName: string = '';
        if (i == 0) {
          packageName = 'Grand Total'
        }

        let grantTotal = [
          { content: packageName, styles: { halign: 'center', valign: 'middle' } },
          { content: this.grantTotalList[i].product, styles: { halign: 'center', valign: 'middle' } },
          { content: this.grantTotalList[i].grantPolicies || '', styles: { halign: 'center', valign: 'middle' } },
          { content: this.grantTotalList[i].grantSa ? this.fnaService.currencyFormat(Number(this.grantTotalList[i].grantSa)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
          { content: this.grantTotalList[i].grantAnnualRate ? this.fnaService.currencyFormat(Number(this.grantTotalList[i].grantAnnualRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
          { content: this.grantTotalList[i].grantMonthlyRate ? this.fnaService.currencyFormat(Number(this.grantTotalList[i].grantMonthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
        ];
        list.push(grantTotal);
      }
      let grantTotal = [
        { content: '', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Total', styles: { halign: 'center', valign: 'middle' } },
        { content: grantPolicies || '', styles: { halign: 'center', valign: 'middle' } },
        { content: grantSa ? this.fnaService.currencyFormat(Number(grantSa)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
        { content: grantAnnualRate ? this.fnaService.currencyFormat(Number(grantAnnualRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
        { content: grantMonthlyRate ? this.fnaService.currencyFormat(Number(grantMonthlyRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
      ];
      list.push(grantTotal);

      let grantPercent: string = '';
      let grantAnnualPercentageRate: any;
      let grantMonthlyPercentageRate: any;
      if (this.grantPercent == 0 || this.grantPercent == null) {
        grantPercent = '';
      } else {
        grantPercent = this.grantPercent.toString();
      }

      if (this.grantAnnualPercentageRate == 0 || this.grantAnnualPercentageRate == null) {
        grantAnnualPercentageRate = '';
      } else {
        grantAnnualPercentageRate = this.grantAnnualPercentageRate.toString();
      }

      if (this.grantMonthlyPercentageRate == 0 || this.grantMonthlyPercentageRate == null) {
        grantMonthlyPercentageRate = '';
      } else {
        grantMonthlyPercentageRate = this.grantMonthlyPercentageRate.toString();
      }

      let highRiskPercent = [
        { content: '', styles: { halign: 'center', valign: 'middle' } },
        { content: 'Discount (%)', styles: { halign: 'center', valign: 'middle' } },
        { content: grantPercent, styles: { halign: 'center', valign: 'middle' } },
        { content: 'Premium after discount:', styles: { halign: 'center', valign: 'middle' } },
        { content: grantAnnualPercentageRate ? this.fnaService.currencyFormat(Number(this.grantAnnualPercentageRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } },
        { content: grantMonthlyPercentageRate ? this.fnaService.currencyFormat(Number(this.grantMonthlyPercentageRate)) : '0.00', styles: { halign: 'center', valign: 'middle' } }
      ]
      list.push(highRiskPercent);
    }

    let height = 0;
    var doc = new jsPDF('p', 'pt', 'a4');
    doc.setFontSize(11).setFont('Roboto', 'normal', 'bold');
    doc.text("Quotation Form", 270, 15);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    doc.text("Client Name", 10, 35);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    doc.text(this.passValueData.customerName || '', 90, 35);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    doc.text("Quotation Date", 420, 35);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    doc.text(quotationDate, 500, 35);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'bold');
    doc.text("Summary of Quotation", 10, 55);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    (doc as any).autoTable({
      head: header,
      body: list,
      theme: 'grid',
      margin: { top: 65, left: 10, right: 10, bottom: 0 },
      tableLineColor: '#44C8D7',
      tableLineWidth: 0.5,
      pageBreak: 'auto',
      rowPageBreak: 'auto',
      showHead: 'firstPage', //everyPage , firstPage, never
      styles: {
        lineColor: [200, 199, 199],
        lineWidth: 0.5,
      },
      headStyles: {
        fillColor: '#fff',
        textColor: '#000',
        fontStyle: 'normal',
        font: "Roboto",
        fontSize: 10,
        cellWidth: 96
      },
      // footStyles: {
      //   fillColor: [241, 196, 15],
      //   fontSize: 15,
      // },
      bodyStyles: {
        //fillColor: [52, 73, 94],
        textColor: "#000",
        minCellHeight: 5,
        font: "Roboto",
        fontSize: 10,
      },
      // alternateRowStyles: {
      //   fillColor: [74, 96, 117],
      // },
      // columnStyles: {
      //   email: {
      //     fontStyle: 'bold',
      //   },
      //   city: {
      //     font: 'mitubachi',
      //   },
      //   id: {
      //     halign: 'right',
      //   },
      // },
      // allSectionHooks: true,
      // drawHeaderCell: function (cell, data) {

      //   if (cell.raw === 'ID') {//paint.Name header red
      //     cell.styles.fontSize = 5;
      //     //cell.styles.textColor = [255, 0, 0];
      //   } else {
      //     cell.styles.textColor = 255;
      //     cell.styles.fontSize = 5;

      //   }
      // },
      // createdCell: function (cell, data) {


      //   if (cell.raw === 'Minsk') {
      //     cell.styles.textColor = "#20a8d8";
      //     cell.styles.fillColor = "#000";
      //   }
      // },
      didDrawCell: data => {
        this.tableHeight = data.table.body;
        if (data.column.index == 1) {
          data.cell.styles.textColor = "#20a8d8";
          data.cell.styles.fillColor = "#fff";
        }
      },

      didParseCell: function (HookData) {
        if (HookData.cell == undefined) { return; }
        if (HookData.cell.text[0].indexOf('Helsinki') > -1) {
          HookData.cell.styles.fillColor = [255, 193, 51];
        }
        if (HookData.cell.text[0].indexOf('Finland') > -1) {
          HookData.cell.styles.fillColor = [255, 193, 51];
        }
      },
     
      didDrawPage: (d) => {
        height = d.cursor.y;
      },
    })

    if (this.tableHeight) {
      for (var i = 0; i < this.tableHeight.length; i++) {
        this.totalHeight += this.tableHeight[i].height
      }
    }


    doc.setFontSize(10).setFont('Roboto', 'normal', 'bold');
    doc.text("Details", 10, height + 30);
    doc.setFontSize(10).setFont('Roboto', 'normal', 'normal');
    doc.text("This section reflect the BPM questionnaire, in same format as",
      170, height + 40);
    doc.text("previous, Questions not answered shall be filtered out automatically",
      170, height + 50);
    console.log('DOC =====> ', doc);

    if (this.platform.is('android') || this.platform.is('ios')) {
      var blobPDF = new Blob([doc.output()], { type: 'application/pdf' });
      this.attachmentDownloadService.mobileDownload(this.passValueData.customerName + '_' + this.passValueData.fnaId + '_' + this.formatDateDD_MM_YYY(new Date()) + '.pdf', blobPDF);
    } else {
      // Open PDF document in new tab
      doc.output('dataurlnewwindow', { filename: this.passValueData.customerName + '_' + this.passValueData.fnaId + '_' + this.formatDateDD_MM_YYY(new Date()) + '.pdf' })
      // Download PDF document  
      doc.save(this.passValueData.customerName + '_' + this.passValueData.fnaId + '_' + this.formatDateDD_MM_YYY(new Date()) + '.pdf');
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
    return [month, day, year].join('/');
  }

  formatDateDD_MM_YYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [month, day, year].join('_');
  }

  calculatePercentage(percent, totalAmount) {
    return ((percent / 100) * totalAmount)
  }


  async updatePercentage(type?) {
    let reqBody = {
      customerId: this.passValueData.customerId,
      fnaType: "BPM",
      grandDiscount: this.grantPercent,
      highDiscount: this.highPercent,
      id: this.passValueData.fnaId,
      products: this.updateProducts
    }

    await this.fnaService.updateFNAProduct(reqBody).toPromise().then(async (res: any) => {
      if (res) {
        FNABRAMDiscount.GRAND_DISCOUNT = this.grantPercent;
        FNABRAMDiscount.HIGH_DISCOUNT = this.highPercent;
        this.passValueData.grandDiscount = this.grantPercent;
        this.passValueData.highDiscount = this.highPercent;
        if (type == 'aboutBRAM') {
          this.alertService.activate('This record was updated', 'Success Message').then(result => {
            this.inputSwitch = type;
            this.changeSwitch.emit(type);
          });
        }
      }
    });
  }
}



