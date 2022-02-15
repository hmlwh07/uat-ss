import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import * as moment from "moment";
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
  getList(search: any = {}) {
    let url = API_CURRENCY_URL + "?"
    if (search.date) {
      url = url + "date=" + moment(search.date).format("YYYY-MM-DD") + "&"
    } if (search.currency) {
      url = url + "currency=" + search.currency + "&"
    }
    console.log(url);
    return this.httpClient.get(url)
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