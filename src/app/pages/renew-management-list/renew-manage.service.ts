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
    // let url = API_RENEW_URL + "?isTeam=true&"
    // if (search.type) {
    //   url = url + "type=" + search.type + "&"
    // } if (search.title) {
    //   url = url + "title=" + search.title + "&"
    // } 
    // if (search.status) {
    //   url = url + "status=" + search.status+ "&"
    // }
    // if (search.startDate) {
    //  url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    // }
    // if (search.endDate) {
    //    url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    // }

    return this.findAll()

  }

  confirmRenew(policy) {
    return this.httpClient.put(API_RENEW_URL + "/confirm/" + policy, {})
  }
}