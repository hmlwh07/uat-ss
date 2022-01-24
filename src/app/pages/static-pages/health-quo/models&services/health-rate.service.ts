import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { HealthRateDTO } from "./health-quo.dto";

const API_HEALTH_RATE_URL = `${environment.apiUrl}/health/coverage-rate`;

@Injectable({
  providedIn: 'root'
})
export class HealthRateService extends BizOperationService<HealthRateDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_HEALTH_RATE_URL);
  }

  getOne(age: number, cover: string) {
    return this.httpClient.get(API_HEALTH_RATE_URL + "?age=" + age + "&cover=" + cover)
  }
}