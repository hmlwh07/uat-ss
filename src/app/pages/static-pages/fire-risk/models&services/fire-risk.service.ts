import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireRiskDTO } from "./fire-risk-quo.dto";

const API_FIRE_RISK_URL = `${environment.apiUrl}/fire-policy/risk`;

@Injectable({
  providedIn: 'root'
})
export class FireRiskService extends BizOperationService<FireRiskDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_RISK_URL);
  }

  deleteMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.delete(API_FIRE_RISK_URL + "/resource/" + redId)
  }
  
  getMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.get(API_FIRE_RISK_URL + "/resource/" + redId)
  }

}