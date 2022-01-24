import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_CUST_URL = `${environment.apiUrl}/customer`

@Injectable({
  providedIn: 'root'
})
export class CustomerListService extends BizOperationService<any, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_CUST_URL);
  }

}