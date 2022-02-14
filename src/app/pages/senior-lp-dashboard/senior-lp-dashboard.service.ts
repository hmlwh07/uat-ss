import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_ADDON_URL = `${environment.apiUrl}/dashboard/agent`;
@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getActivityList(search: any = {}) {
    let url = API_ADDON_URL + "?"
    if (search.empId) {
      url = url + "empId=" + search.empId + "&"
    } 
    return this.httpClient.get(url)

  }
}