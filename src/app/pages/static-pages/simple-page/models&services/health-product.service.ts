import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { HealthProductDetailDTO } from "./health-product.dto";

const API_ADDON_URL = `${environment.apiUrl}/health/product-detail`;

@Injectable({
  providedIn: 'root'
})
export class HealthProductService extends BizOperationService<HealthProductDetailDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getOne(quo: string){
    return this.httpClient.get(API_ADDON_URL+"/resource/"+quo)
  }
}