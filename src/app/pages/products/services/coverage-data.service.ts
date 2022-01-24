import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { Coverage } from "../models/product.dto";

const API_COVERAGE_URL = `${environment.apiUrl}/coverage`;

@Injectable()
export class CoverageDataService extends BizOperationService<Coverage, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_COVERAGE_URL);
  }
}