import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
interface ColDto {
  tableName: string,
  cols?: any
}
const API_TALBEL_URL = `${environment.apiUrl}/dynamiccolumn`
@Injectable()
export class ColAPIService extends BizOperationService<ColDto, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_TALBEL_URL);
  }
}