import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { PolicyDTO } from "./policy.dto";

const API_QUOTATION_URL = `${environment.apiUrl}/policy/page`
const API_QUOTATION__ATT_URL = `${environment.apiUrl}/policy`
const API_EMAIL_URL = `${environment.apiUrl}/email`
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
      url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    }
    if (search.endDate) {
      url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }
    if (search.productId) {
      url = url + "productId=" + search.productId + "&"
    }
    if (search.policyholderName) {
      url = url + "policyholderName=" + search.policyholderName + "&"
    }
    if (search.applicationId) {
      url = url + "applicationId=" + search.applicationId + "&"
    }
    if (search.quotationId) {
      url = url + "quotationId=" + search.quotationId + "&"
    }
    if (search.applicationStatus) {
      url = url + "applicationStatus=" + search.applicationStatus + "&"
    }
    if (search.limit) {
      url = url + "limit=" + search.limit + "&"
    }
    if (search.offset) {
      url = url + "offset=" + search.offset + "&"
    }
    return this.httpClient.get(url)
  }

  updateAttachment(resId: string, attId: any, signDate: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/attachment",
      {
        attachmentId: attId + "",
        signatureDate: signDate,
        policyNo: resId
      })
  }

  submitPolicy(resId: string, branchCode: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/status/submit/" + resId + "?branchCode=" + branchCode, {})
  }
  submitPolicyWithProposal(resId: string, branchCode: string, base64Proposal) {

    let policyResourceRequest = {
      resourceId: resId,
      branchCode: branchCode,
      base64Proposal: base64Proposal,
      sourceOfBusiness: 'TEST1'
    }
    console.log("base64Proposal==>request", policyResourceRequest);
    // return base64Proposal
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/status/submit/" + resId, policyResourceRequest)
  }
  getEmailInfo(productCode: string, branchCode: string) {
    return this.httpClient.get(API_EMAIL_URL + "?productCode=" + productCode + "&branchCode=" + branchCode)
  }
  resendEmail(quotationNo){
    let reqObj={
      quotationNo:quotationNo
    }
    return this.httpClient.post(API_QUOTATION__ATT_URL+'/resend-mail',reqObj)
  }

  submitBranch(resId: string, branchCode: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/branch",
      {
        resourceId: resId,
        branchCode: branchCode
      })
  }
  submitSourceOfBusiness(resId: string, sourceOfBusinessCode: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/sourceOfBusiness",
      {
        resourceId: resId,
        sourceOfBusinessCode: sourceOfBusinessCode
      })
  }
}



@Injectable({
  providedIn: 'root'
})
export class PolicyManageService extends BizOperationService<PolicyDTO, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_QUOTATION__ATT_URL);
  }
}