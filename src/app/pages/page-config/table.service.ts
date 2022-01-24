import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
interface TableDto {
  tableName: string,
  oldTableName?: string
}
const API_TALBEL_URL = `${environment.apiUrl}/dynamictable`
@Injectable()
export class TableAPIService extends BizOperationService<TableDto, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_TALBEL_URL);
  }

  validate(name: string) {
    return this.httpClient.post(API_TALBEL_URL + "/validate?tableName=" + name, { tableName: name })
  }
}