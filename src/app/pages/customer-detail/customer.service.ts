import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { Customer } from "./custmer.dto";

const API_CUSTOMER_URL = `${environment.apiUrl}/customer`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BizOperationService<Customer, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_CUSTOMER_URL);
  }
}