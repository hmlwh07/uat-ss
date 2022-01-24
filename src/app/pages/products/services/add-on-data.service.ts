import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { AddOn } from "../models/product.dto";

const API_ADDON_URL = `${environment.apiUrl}/addon`;

@Injectable()
export class AddOnDataService extends BizOperationService<AddOn, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }
}