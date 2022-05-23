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
    let postData = {
      "endDate": "",
      "startDate": "",
      "jobName": "",
      "jobType": "",
      "status": ""
    }
    if (search.startDate) {
      postData.startDate = moment(search.startDate).format("YYYY-MM-DD")
    }
    if (search.endDate) {
      postData.endDate = moment(search.endDate).format("YYYY-MM-DD")
    }
    if (search.name) {
      postData.jobName = search.name
    }
    if (search.typeCode) {
      postData.jobType = search.typeCode
    }
    if (search.status) {
      postData.status = search.status
    }

    return this.httpClient.post(url, postData)
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