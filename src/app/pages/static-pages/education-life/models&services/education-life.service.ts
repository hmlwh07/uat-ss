import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { EduPaymentDTO } from "./education-quo.dto";

const API_EDU_LIFE_URL = `${environment.apiUrl}/education/life-benefit`;

@Injectable({
  providedIn: 'root'
})
export class EduPaymentService extends BizOperationService<EduPaymentDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_EDU_LIFE_URL);
  }

  deleteMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.delete(API_EDU_LIFE_URL + "/resource/" + redId)
  }
  getMany(redId: string) {
    // /api/v1/health/payment-schedule/resource/{resourceId}
    return this.httpClient.get(API_EDU_LIFE_URL + "/resource/" + redId)
  }

  saveMany(data: any) {
    return this.httpClient.post(API_EDU_LIFE_URL + "s", data)
  }
}