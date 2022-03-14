import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";
import { AssectDto } from "./asset/asset-manage.dto";
import { ProductDto } from "./chart-analysis/product-analysis/product-manage.dto";
import { EducationDto } from "./education/education-manage.dto";
import { FNAConstant } from "./fna-constant";
import { FnaDataViewComponent } from "./fna-data-view/fna-data-view.component";
import { FNA_PRODUCTS } from "./fna-products";
import { HealthDto } from "./health/health-manage.dto";
import { IncomeDto } from "./income/income-manage.dto";
import { RetirementDto } from "./retirement/retirement-manage.dto";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FANService extends BizOperationService<any, number>{
  private _fnaIncome: IncomeDto = new IncomeDto();
  private _fnaRetirementSaving: RetirementDto = new RetirementDto();
  private _fnaHealths = new Array<HealthDto>();
  private _fnaEducations = new Array<EducationDto>();
  private _fnaAssect = new Array<AssectDto>();
  private _fnaProduct = new Array<ProductDto>();
  private _percentage: string = '';
  private _totalPercentageText: string = '';
  private _bgColor: string = '';
  private _fnaUpdateProducts = new Array<any>();
  private _fnaTextColor: number = null;

  constructor(protected httpClient: HttpClient, private modalService: NgbModal) {
    super(httpClient, API_ADDON_URL);
  }

  saveFNA(data) {
    return this.httpClient.post(API_ADDON_URL, data);
  }


  updateFNAProduct(data) {
    console.log('updateFNAProduct', data);
    return this.httpClient.put(API_ADDON_URL, data);
  }

  getFNAProduct(name, type): Array<any> {
    let products = [];
    let list = [];
    if (type) {
      products = FNA_PRODUCTS.filter(data =>
        data.productName == name && data.type == type);
    } else {
      products = FNA_PRODUCTS.filter(data =>
        data.productName == name);
    }

    for (var i = 0; i < products.length; i++) {
      list.push(products[i].productCode);
    }
    return list;
  }

  set fnaUpdateProducts(value: Array<any>) {
    let tempProducts = [];
    if (value) {
      for (var i = 0; i < value.length; i++) {
        tempProducts.push(value[i].code)
      }
    }
    this._fnaUpdateProducts = tempProducts;
  }

  get fnaUpdateProducts(): Array<any> {
    return this._fnaUpdateProducts;
  }

  set fnaHealths(value: Array<HealthDto>) {
    this._fnaHealths = value;
  }

  get fnaHealths(): Array<HealthDto> {
    return this._fnaHealths;
  }

  set fnaEducations(value: Array<EducationDto>) {
    this._fnaEducations = value;
  }

  get fnaEducations(): Array<EducationDto> {
    return this._fnaEducations;
  }

  set fnaAssect(value: Array<AssectDto>) {
    this._fnaAssect = value;
  }

  get fnaAssect(): Array<AssectDto> {
    return this._fnaAssect;
  }

  set fnaIncome(value: IncomeDto) {
    this._fnaIncome = value;
  }

  get fnaIncome(): IncomeDto {
    return this._fnaIncome;
  }

  set fnaRetirementSaving(value: RetirementDto) {
    this._fnaRetirementSaving = value;
  }

  get fnaRetirementSaving(): RetirementDto {
    return this._fnaRetirementSaving;
  }
  set fnaProduct(value: Array<ProductDto>) {
    this._fnaProduct = value;
  }

  get fnaProduct(): Array<ProductDto> {
    return this._fnaProduct;
  }

  set percentage(value: string) {
    this._percentage = value;
  }

  get percentage(): string {
    return this._percentage;
  }

  set totalPercentageText(value: string) {
    this._totalPercentageText = value;
  }

  get totalPercentageText(): string {
    return this._totalPercentageText;
  }

  set bgColor(value: string) {
    this._bgColor = value;
  }

  get bgColor(): string {
    return this._bgColor;
  }

  set fnaTextColor(value: number) {
    this._fnaTextColor = value;
  }

  get fnaTextColor(): number {
    return this._fnaTextColor;
  }




  mathRoundTo(num: number, places: number) {
    const factor = 10 ** places;
    return (Math.round(num * factor) / factor).toLocaleString();
  };

  numberFormat(val, decimalPlaces) {
    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
  }

  currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  getNumber(str) {
    var arr = str.split('');
    var out = new Array();
    for (var cnt = 0; cnt < arr.length; cnt++) {
      if (isNaN(arr[cnt]) == false) {
        out.push(arr[cnt]);
      }
    }
    return Number(out.join(''));
  }

  async openModal(type) {
    const modalRef = this.modalService.open(FnaDataViewComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.type = type;
    modalRef.result.then(() => { }, (res) => {
      console.log('openModal', res);
      if (res) {

      }
    });
    return null;
  }



}