import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

const API_CUSTOMER_URL = `${environment.apiUrl}/customer`;
@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  constructor(protected httpClient: HttpClient) {
  }

  getCustomerList(search: any = {}, party: boolean, popup: boolean) {
    let url = API_CUSTOMER_URL + "?"
    if (search.name) {
      url = url + "name=" + search.name + "&"
    } if (search.partyCode) {
      url = url + "partyCode=" + search.partyCode + "&"
    } 
    if (search.startDate) {
      url = url + "startDate=" + search.startDate + "&"
    } 
    if (search.endDate) {
      url = url + "endDate=" + search.endDate + "&"
    } if (search.statusCode) {
      url = url + "statusCode=" + search.statusCode + "&"
    } if (search.identityType) {
      url = url + "identityType=" + search.identityType + "&"
    } if (search.identityNumber) {
      url = url + "identityNumber=" + search.identityNumber + "&"
    }
    // if (popup) {
      url = url + "isPartyCode=" + party
    // }
    return this.httpClient.get(url)
  }
}