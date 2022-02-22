import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";

const API_ENDO_RATE_URL = `${environment.apiUrl}/endowment/rate`;

@Injectable({
  providedIn: 'root'
})
export class EndoRateService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ENDO_RATE_URL);
  }

  getMany(term: string) {
    return this.httpClient.get(API_ENDO_RATE_URL + "s?policyTerm=" + term)
  }
}

const API_ENDO_S_RATE_URL = `${environment.apiUrl}/endowment/surrender/rate`;

@Injectable({
  providedIn: 'root'
})
export class EndoSurrRateService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ENDO_S_RATE_URL);
  }

  getMany(term: string) {
    return this.httpClient.get(API_ENDO_S_RATE_URL + "?policyTerm=" + term)
  }
}