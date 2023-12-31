import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchDropdownInnerComponent } from "src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-dropdown-inner.component";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { Lead } from "./lead.dto";


const API_LEAD_URL = `${environment.apiUrl}/lead`;
const API_CAMPAIGN_URL = `${environment.apiUrl}/campaign`;
const API_LEAD_SOURCE_URL = `${environment.apiUrl}/leadSource`;
const API_LEAD_SCORE_URL = `${environment.apiUrl}/leadSource/score`;
const API_LEAD_QUALITY_URL = `${environment.apiUrl}/leadQuality`;
const API_VALIDITY_URL = `${environment.apiUrl}/validity-period/filter`;
const API_EXISTING_CUSTOMER_URL = `${environment.apiUrl}/customer/checkExistingCustomer`;
const API_EXISTING_PROSPECT_URL = `${environment.apiUrl}/customer/checkExistingProspect`;

@Injectable({
  providedIn: 'root'
})
export class LeadDetailService extends BizOperationService<Lead, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_LEAD_URL);
  }
  updateLeadStatus(postData, oldId) {
    return this.httpClient.put(API_LEAD_URL + "/" + oldId + "/status", postData)
  }
  getCampaignList(search) {
    let url = API_CAMPAIGN_URL + "?"
    if (search.cpmNumber) {
      url = url + "cpmNumber=" + search.cpmNumber + "&"
    } if (search.cpmName) {
      url = url + "cpmName=" + search.cpmName + "&"
    }
    // console.log(url);
    return this.httpClient.get(url)
  }
  getLeadSource() {
    return this.httpClient.get(API_LEAD_SOURCE_URL)
  }
  getLeadQuality(channel: string) {
    return this.httpClient.get(API_LEAD_QUALITY_URL + "?distributionChannelCode=" + channel)
  }
  getLeadScore(sourceCode: string, channel: string) {
    return this.httpClient.get(API_LEAD_SCORE_URL + "?sourceCode=" + sourceCode + "&distributionChannelCode=" + channel)
  }
  getValidityPeriod(leadSource, productId) {
    return this.httpClient.get(API_VALIDITY_URL + "?leadSource=" + leadSource + "&" + "productId=" + productId)
  }
  checkLead(postData) {
    return this.httpClient.post(API_LEAD_URL + "/check", postData)
  }
  getCampaignIdByName(campaignName: string) {
    return this.httpClient.get(API_CAMPAIGN_URL + "?cpmName=" + campaignName)
  }
  getCampaignNameById(campaignId: string) {
    return this.httpClient.get(API_CAMPAIGN_URL + "?cpmNumber=" + campaignId)
  }
  checkExistingCustomer(postData: any) {
    return this.httpClient.post(API_EXISTING_CUSTOMER_URL, postData)
  }
  checkExistingProspect(postData: any) {
    return this.httpClient.post(API_EXISTING_PROSPECT_URL, postData)
  }
  createLead(postData: any) {
    return this.httpClient.post(API_LEAD_URL, postData)
  }
  getStatusById(leadId: string) {
    return this.httpClient.get(API_LEAD_URL + "/check?leadId=" + leadId)
  }
}
