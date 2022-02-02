import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_RESET_PASSOWRD_URL = `${environment.apiUrl}/reset-password`;

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_RESET_PASSOWRD_URL);
  }

}