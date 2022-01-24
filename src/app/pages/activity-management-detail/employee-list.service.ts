import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_EMP_URL = `${environment.apiUrl}/employee`

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService extends BizOperationService<any, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_EMP_URL);
  }

}