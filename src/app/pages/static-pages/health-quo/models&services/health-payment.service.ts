import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { HealthPaymentDTO } from "./health-quo.dto";

const API_HEALTH_PAY_URL = `${environment.apiUrl}/health/payment-schedule`;

@Injectable({
  providedIn: 'root'
})
export class HealthPaymentService extends BizOperationService<HealthPaymentDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_HEALTH_PAY_URL);
  }

  deleteMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.delete(API_HEALTH_PAY_URL + "/resource/" + redId)
  }
  getMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.get(API_HEALTH_PAY_URL + "/resource/" + redId)
  }

  saveAll(postData: any) {
    return this.httpClient.post(API_HEALTH_PAY_URL + "s", postData)
  }
}