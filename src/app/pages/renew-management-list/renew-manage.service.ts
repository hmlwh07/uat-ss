import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { RenewManage } from "./renew-manage.dto";

const API_RENEW_URL = `${environment.apiUrl}/renewal-policy`;
@Injectable({
  providedIn: 'root'
})
export class RenewManageService extends BizOperationService<RenewManage, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_RENEW_URL);
  }

  getRenewList(search: any = {}) {
    let url = API_RENEW_URL + "/search?"
    return this.httpClient.post(url, search);
  }

  confirmRenew(policy) {
    return this.httpClient.put(API_RENEW_URL + "/confirm/" + policy, {})
  }
}