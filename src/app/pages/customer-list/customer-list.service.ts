import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import moment from "moment";
import { environment } from "../../../environments/environment";

const API_CUSTOMER_URL = `${environment.apiUrl}/customer`;
const API_CUSTOMER_URL_PAGE = `${environment.apiUrl}/customer/page`;
@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  constructor(protected httpClient: HttpClient) {
  }

  getCustomerList(search: any = {}, party: boolean, popup: boolean, isCustom?: boolean) {
    let url = popup ? API_CUSTOMER_URL + "?" : API_CUSTOMER_URL_PAGE + "?"
    if (search.name) {
      url = url + "name=" + search.name + "&"
    }
    if (search.phoneNo) {
      url = url + "phoneNo=" + search.phoneNo + "&"
    }
    if (search.partyCode) {
      url = url + "partyCode=" + search.partyCode + "&"
    }
    if (search.startDate) {
      url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    }
    if (search.endDate) {
      url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }
    if (search.statusCode) {
      url = url + "statusCode=" + search.statusCode + "&"
    }
    if (search.identityType) {
      url = url + "identityType=" + search.identityType + "&"
    }
    if (search.identityNumber) {
      url = url + "identityNumber=" + search.identityNumber + "&"
    }
    if (!popup) {
      if (search.limit) {
        url = url + "limit=" + search.limit + "&"
      }
      if (search.offset) {
        url = url + "offset=" + search.offset + "&"
      }
    }
    if (!isCustom && !popup) {
      url = url + "isPartyCode=" + party
    }

    return this.httpClient.get(url)
  }
}