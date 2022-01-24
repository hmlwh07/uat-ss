import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireRiskRateDTO } from "./fire-risk-quo.dto";

const API_EDU_P_RATE_URL = `${environment.apiUrl}/education-premium-rates`;

@Injectable({
  providedIn: 'root'
})
export class FireRiskRateService extends BizOperationService<FireRiskRateDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_EDU_P_RATE_URL);
  }

  getMany(plan: string, term: string) {
    return this.httpClient.get(API_EDU_P_RATE_URL + "?benefitPlan=" + plan + "&policyTerm=" + term)
  }
}

const API_EDU_S_RATE_URL = `${environment.apiUrl}/education-surrender-values`;

@Injectable({
  providedIn: 'root'
})
export class EduSurrRateService extends BizOperationService<FireRiskRateDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_EDU_S_RATE_URL);
  }

  getMany(term: string) {
    return this.httpClient.get(API_EDU_S_RATE_URL + "?policyTerm=" + term)
  }
}