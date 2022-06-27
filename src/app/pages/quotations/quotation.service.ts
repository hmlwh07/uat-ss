import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { QuotationDTO } from "./quotation.dto";

const API_QUOTATION_URL = `${environment.apiUrl}/quotation`

@Injectable({
  providedIn: 'root'
})
export class QuotationService extends BizOperationService<QuotationDTO, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_QUOTATION_URL);
  }
  getQuoList(search: any = {}) {
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
    return this.httpClient.get(url)

  }
}


