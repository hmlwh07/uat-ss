import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { Product, ProductUI } from "../models/product.dto";

const API_PRODUCT_UI_URL = `${environment.apiUrl}/ui-product`;

@Injectable()
export class ProductUIService extends BizOperationService<ProductUI, number>{
  selectedProd: Product

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_PRODUCT_UI_URL);
  }

}

const API_PROD_UI_URL = `${environment.apiUrl}/delete-productUi-byproductIdandType`;

@Injectable()
export class ProductUIDeleteService extends BizOperationService<ProductUI, number>{
  selectedProd: Product

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_PROD_UI_URL);
  }

  deleteMany(query: string) {
    try {
      return this.httpClient.delete(this.baseUri + '?' + query);
    } catch (error) {
      return of(null)
    }
  }

}