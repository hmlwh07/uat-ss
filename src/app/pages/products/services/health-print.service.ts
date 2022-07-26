import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { AddOn } from "../models/product.dto";

const API_HEALTH_URL = `${environment.apiUrl}/health/dynamic/info`;
@Injectable()
export class HealthPrintService extends BizOperationService<AddOn, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_HEALTH_URL);
  }
  getOne(resId: string){
    // console.log(resId,"data");
    return this.httpClient.get(API_HEALTH_URL+"/"+resId)
  }
}