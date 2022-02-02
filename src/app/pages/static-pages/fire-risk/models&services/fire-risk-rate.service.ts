import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";

const API_RISK_RATE_URL = `${environment.apiUrl}/fire-policy/pae`;

@Injectable({
  providedIn: 'root'
})
export class FireRiskRateService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_RISK_RATE_URL);
  }

  getMany(data) {
    return this.httpClient.post(API_RISK_RATE_URL, data)
  }
}
