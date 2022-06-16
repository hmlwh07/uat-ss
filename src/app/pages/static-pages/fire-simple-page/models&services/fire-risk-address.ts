import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireProductDTO } from "./fire-product.dto";

const API_RISK_ADDRESS = `${environment.apiUrl}/fire-policy/risk/address`;

@Injectable({
  providedIn: 'root'
})
export class FireRiskAddressService extends BizOperationService<FireProductDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_RISK_ADDRESS);
  }

  getOne(resourceId: string){
    return this.httpClient.get(API_RISK_ADDRESS+"/"+resourceId)
  }
}