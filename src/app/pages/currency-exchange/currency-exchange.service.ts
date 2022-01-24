import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_CURRENCY_URL = `${environment.apiUrl}/currency`;
const API_CURRENCY_URL2 = `${environment.apiUrl}/currencyWithType`;

export interface CurrencyExchange {
  id: number,
  type: string,
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService extends BizOperationService<CurrencyExchange, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_CURRENCY_URL);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LatestCurrencyExchangeService extends BizOperationService<CurrencyExchange, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_CURRENCY_URL2);
  }

  getByType(type) {
    return this.httpClient.get(API_CURRENCY_URL2 + "/" + type)
  }
}