import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { Customer } from "../../customer-detail/custmer.dto";
import { Product } from "../models/product.dto";

const API_PRODUCT_URL = `${environment.apiUrl}/product`;
const API_AGENT_URL = `${environment.apiUrl}/dashboard/agent`;

@Injectable({
  providedIn: 'root'
})
export class ProductDataService extends BizOperationService<Product, number>{
  selectedProd: Product
  createingProd: Product
  createingProdRef: Product
  creatingCustomer: Customer
  isApplication: boolean = false
  type: string
  viewType: string
  editData: any
  previewType: string
  resultData: any
  referenceID: string = null
  creatingLeadId: string = "0"
  referenceStatus: string = null
  private _totalPremium: any = 0;
  private _totalPremiumView: any = 0;


  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_PRODUCT_URL);
  }

  getAll(showInList?) {
    return this.httpClient.get(API_PRODUCT_URL + "-view" + "?showInList=" + showInList)
  }

  getAgentInfo(empId) {
    let url = API_AGENT_URL + "?"

    url = url + "empId=" + empId

    return this.httpClient.get(url)
  }

  get totalPremium(): any {
    return this._totalPremium;
  }

  set totalPremium(value: any) {
    this._totalPremium = value;
  }

  get totalPremiumView(): any {
    return this._totalPremiumView;
  }

  set totalPremiumView(value: any) {
    this._totalPremiumView = value;
  }

}