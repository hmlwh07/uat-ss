import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { AddOn } from "../models/product.dto";

const API_ADDON_URL = `${environment.apiUrl}/validity-period`;

@Injectable()
export class ValidityPeriodService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }
}