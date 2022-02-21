import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";

const API_EDU_LIFE_URL = `${environment.apiUrl}/endowment`;

@Injectable({
  providedIn: 'root'
})
export class EndoService extends BizOperationService<any, number>{
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