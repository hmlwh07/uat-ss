import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";

const API_LEAD_URL = `${environment.apiUrl}/lead`;
@Injectable({
  providedIn: 'root'
})
export class LeadListService {
  constructor(protected httpClient: HttpClient) {
  }

  getLeadList(search: any = {}) {
    let url = API_LEAD_URL + "?"
    if (search.campaignName) {
      url = url + "campaignName=" + search.campaignName + "&"
    } if (search.existingCustomerId) {
      url = url + "existingCustomerId=" + search.existingCustomerId + "&"
    } if (search.leadId) {
      url = url + "leadId=" + search.leadId + "&"
    }
    if (search.contactName) {
      url = url + "contactName=" + search.contactName + "&"
    } if (search.startDate) {
      url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    } 
    if (search.endDate) {
      url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }if (search.productId) {
      url = url + "productId=" + search.productId + "&"
    } 
    if (search.sourceCode) {
      url = url + "sourceCode=" + search.sourceCode + "&"
    } 
    if (search.statusCode) {
      url = url + "statusCode=" + search.statusCode + "&"
    } 
    console.log(url);
    return this.httpClient.get(url)
  }
}