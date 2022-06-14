import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { AddOn } from "../models/product.dto";

const API_MOTOR_URL = `${environment.apiUrl}/pa/dynamic/info`;
@Injectable()
export class PaPrintService extends BizOperationService<AddOn, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_MOTOR_URL);
  }
  getOne(resId: string){
    console.log(resId,"data");
    return this.httpClient.get(API_MOTOR_URL+"/"+resId)
  }
}