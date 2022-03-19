import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { PolicyDTO } from "./policy.dto";

const API_QUOTATION_URL = `${environment.apiUrl}/policy`

@Injectable({
  providedIn: 'root'
})
export class PolicyService extends BizOperationService<PolicyDTO, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_QUOTATION_URL);
  }

  getPolicyList(search: any = {}) {
    let url = API_QUOTATION_URL + "?"
    let team = search.isTeam ? true : false
    url = url + "isTeam=" + team + "&"

    if (search.startDate) {
      url = url + "startDate=" + moment(search.openDateStr).format("YYYY-MM-DD") + "&"
    }
    if (search.endDate) {
      url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }
  }

  updateAttachment(resId: string, attId: any) {
    return this.httpClient.put(API_QUOTATION_URL + "/attachment", { attachmentId: attId + "", policyNo: resId })
  }

  submitPolicy(resId: string) {
    return this.httpClient.put(API_QUOTATION_URL + "/status/submit/" + resId, {})
  }

}