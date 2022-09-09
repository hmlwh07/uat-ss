import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_ADDON_URL = `${environment.apiUrl}/dashboard/agent`;
const API_Lead_URL = `${environment.apiUrl}/dashboard/lead-activity/count`;
const API_Recent_URL = `${environment.apiUrl}/dashboard/resent-operation`;
const API_Campaign_URL = `${environment.apiUrl}/dashboard/today-campaign`;
const API_Followup_URL = `${environment.apiUrl}/dashboard/follow-up`;
const API_Backlog_URL = `${environment.apiUrl}/dashboard/backlog`;
const API_AssignLead_URL = `${environment.apiUrl}/dashboard/assign-lead`;
const API_Agent_URL = `${environment.apiUrl}/dashboard/sale-active-agent`;
const API_DASHBOARD_PROFILE_URL=`${environment.apiUrl}/dashboard/agent/attachment`;
const API_RENEWAL_PREMIUM=`${environment.apiUrl}/renewal-policy/premium`;
@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getList(search: any = {}) {
    let url = API_ADDON_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }

  getLeadList(search: any = {}) {
    let url = API_Lead_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }

  getRecentList(search: any = {}) {
    let url = API_Recent_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)

  }

  getCampaignList(search: any = {}) {
    let url = API_Campaign_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)

  }

  getBacklogList(search: any = {}) {
    let url = API_Backlog_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }


  getLeadAssignList(search: any = {}) {
    let url = API_AssignLead_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }

  getFollowupList(search: any = {}) {
    let url = API_Followup_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }

  getAgentList(search: any = {}) {
    let url = API_Agent_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)
  }
  getRenewalPremium(search: any = {}) {
    let url = API_RENEWAL_PREMIUM + "?"
    if (search.agentId) {
      url = url + "agentId=" + search.agentId
    } 
    return this.httpClient.get(url)
  }
}
@Injectable({
  providedIn: 'root'
})
export class DashboardAttachmentService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_DASHBOARD_PROFILE_URL);
  }
}


