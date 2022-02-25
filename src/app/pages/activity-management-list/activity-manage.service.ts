import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { ActivityManage } from "./activity-manage.dto";

const API_ADDON_URL = `${environment.apiUrl}/activity`;
@Injectable({
  providedIn: 'root'
})
export class ActivityManageService extends BizOperationService<ActivityManage, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getActivityList(search: any = {}) {
    let url = API_ADDON_URL + "?isTeam=true&"
    if (search.type) {
      url = url + "type=" + search.type + "&"
    } if (search.title) {
      url = url + "title=" + search.title + "&"
    } if (search.status) {
      url = url + "status=" + search.status
    }

    return this.httpClient.get(url)

  }
}