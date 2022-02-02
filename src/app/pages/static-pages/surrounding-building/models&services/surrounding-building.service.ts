import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { SurroundingBuildingDTO } from "./surrounding-building.dto";

const API_SURROUNDING_BUILDING_URL = `${environment.apiUrl}/fire-policy/surrounding-building`;
const API_RISK_SURROUNDING_BUILDING_API = `${environment.apiUrl}/fire-policy/risk/`;

@Injectable({
  providedIn: 'root'
})
export class SurroundingBuildingService extends BizOperationService<SurroundingBuildingDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_SURROUNDING_BUILDING_URL);
  }
  // fire-policy/surrounding-building/max-rate

  getByRiskId(riskId: number) {
    return this.httpClient.get(API_RISK_SURROUNDING_BUILDING_API + riskId + "/surrounding-building")
  }

  getMaxRate(riskId: number) {
    return this.httpClient.get(API_SURROUNDING_BUILDING_URL + "/max-rate?riskId=" + riskId)

  }
}