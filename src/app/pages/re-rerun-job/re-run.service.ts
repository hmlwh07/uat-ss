import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";

const API_RE_RUN_URL = `${environment.apiUrl}/re-run`;
const API_RE_RUN_POLICY_STATUS_URL=`${environment.apiUrl}/`;
const API_RE_RUN_RENEWAL_URL=`${environment.apiUrl}/`;

@Injectable({
  providedIn: 'root'
})
export class ReRunService {
  constructor(protected httpClient: HttpClient) {
  }

  getReRunList(search: any = {}) {
    let url = API_RE_RUN_URL + "?"
    if (search.startDate) {
      url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    } 
    if (search.endDate) {
      url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }if (search.typeCode) {
      url = url + "typeCode=" + search.typeCode + "&"
    } 
    return this.httpClient.get(url)
  }

  reRunRenewal(data:any={}){
    let url= API_RE_RUN_RENEWAL_URL + "?"

    return this.httpClient.get(url)
  }
  reRunPolicyStatus(data:any={}){
    let url= API_RE_RUN_POLICY_STATUS_URL + "?"

    return this.httpClient.get(url)
  }
}