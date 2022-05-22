import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";

const API_RE_RUN_URL = `${environment.apiUrl}/scheduler-log/`;
const API_RE_RUN_URL_TYPE = `${environment.apiUrl}/scheduler-log/type/`;
const API_RE_RUN_POLICY_STATUS_URL = `${environment.apiUrl}/scheduler/status/run`;
const API_RE_RUN_RENEWAL_URL = `${environment.apiUrl}/scheduler/renewal/run`;
const API_RE_RUN_CRM_URL = `${environment.apiUrl}/scheduler/crm/customer/run`

@Injectable({
  providedIn: 'root'
})
export class ReRunService {
  constructor(protected httpClient: HttpClient) {
  }

  getReRunListByType(search: any = {}) {
    let url = API_RE_RUN_URL
    // if (search.startDate) {
    //   url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    // } 
    // if (search.endDate) {
    //   url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    // }
    if (search.typeCode) {
      // url = url + "type=" + search.typeCode + "&"
      url = url + 'type/' +search.typeCode
    }
    return this.httpClient.get(url)
  }

  reRunRenewal() {
    return this.httpClient.post(API_RE_RUN_RENEWAL_URL, {})
  }

  reRunPolicyStatus(date: string) {
    let formatDate = moment(date).format("YYYY-MM-DD")
    let url = API_RE_RUN_POLICY_STATUS_URL + "?date=" + formatDate
    return this.httpClient.post(url, {})
  }

  reRunCRM(date: string) {
    let formatDate = moment(date).format("YYYY-MM-DD")
    let url = API_RE_RUN_CRM_URL + "?date=" + formatDate
    return this.httpClient.post(url, {})
  }


}