import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { PolicyDTO } from "./policy.dto";
const API_QUOTATION_URL = `${environment.apiUrl}/policy/page`
const API_QUOTATION__ATT_URL = `${environment.apiUrl}/policy`
const API_EMAIL_URL = `${environment.apiUrl}/email-info`
const API_TCS_STATUS = `${environment.apiUrl}/policy/getTcsStatus`
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
  getTcsStatus(quoId) {
    return this.httpClient.get(API_TCS_STATUS + '?quotationId=' + quoId)
  }

  updateAttachment(resId: string, attId: any, signDate: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/attachment",
      {
        attachmentId: attId + "",
        signatureDate: signDate,
        policyNo: resId
      })
  }
  getOne(resId) {
    return this.httpClient.get(API_QUOTATION__ATT_URL + '/' + resId)
  }
  submitPolicy(resId: string, branchCode: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/status/submit/" + resId + "?branchCode=" + branchCode, {})
  }
  submitPolicyWithProposal(resId: string, branchCode: string, base64Proposal, sourceOfBusiness, emailInfo, sourceOfBusinessCode) {

    let policyResourceRequest = {
      resourceId: resId,
      branchCode: branchCode,
      base64Proposal: base64Proposal,
      sourceOfBusiness: sourceOfBusiness || 'KBZMS Partners Channel',
      sourceOfBusinessCode: sourceOfBusinessCode || null,
      quotationNumber: null,
      emailTo: emailInfo.emailTo,
      emailCc: emailInfo.emailCC
    }
    console.log("base64Proposal==>request", policyResourceRequest);
    // return base64Proposal
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/status/submit/" + resId, policyResourceRequest)
  }
  getEmailInfo(branchCode: string, productCode: string) {
    let reqObj = {
      "branchId": branchCode,
      "productId": productCode
    }
    return this.httpClient.post(API_EMAIL_URL, reqObj)
  }
  resendEmail(reqValue) {
    let reqObj = {
      quotationNumber: reqValue.quotationNo,
      // quotataionNumber: reqValue.quotationNo,
      productName: reqValue.productName,
      branchCode: reqValue.branchCode,
      emailCc: reqValue.emailCC,
      emailTo: reqValue.emailTo,
      resourceId: reqValue.resourceId,
      sourceOfBusiness: reqValue.sourceOfBusiness || 'KBZMS Partners Channel',
    }
    console.log(reqObj);

    // return reqObj.quotationNumber
    return this.httpClient.post(environment.apiUrl + '/email-send', reqObj)
  }
  submitBranch(resId: string, branchCode: string, soc?: string) {
    return this.httpClient.put(API_QUOTATION__ATT_URL + "/branch",
      {
        resourceId: resId,
        branchCode: branchCode,
        sourceOfBusiness: soc
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