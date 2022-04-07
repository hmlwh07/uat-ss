import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { Customer } from "../../customer-detail/custmer.dto";
import { Product } from "../models/product.dto";

const API_PRODUCT_URL = `${environment.apiUrl}/product`;

@Injectable({
  providedIn: 'root'
})
export class ProductDataService extends BizOperationService<Product, number>{
  selectedProd: Product
  createingProd: Product
  createingProdRef: Product
  creatingCustomer: Customer
  type: string
  viewType: string
  editData:any 
  previewType: string
  resultData: any
  referenceID: string = null
  creatingLeadId: string = "0"
  referenceStatus: string = null
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_PRODUCT_URL);
  }

  getAll(){
   return this.httpClient.get(API_PRODUCT_URL+"-view")
  }

}