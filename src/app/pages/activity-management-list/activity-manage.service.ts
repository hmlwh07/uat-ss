import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { ActivityManage } from "./activity-manage.dto";

const API_ADDON_URL = `${environment.apiUrl}/activity`;
const API_ADDON_URL_PAGER = `${environment.apiUrl}/activity/page`;
@Injectable({
  providedIn: 'root'
})
export class ActivityManageService extends BizOperationService<ActivityManage, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL_PAGER);
  }

  getActivityList(search: any = {}) {
    let url = API_ADDON_URL_PAGER + "?isTeam=true&"
    if (search.type) {
      url = url + "type=" + search.type + "&"
    } if (search.title) {
      url = url + "title=" + search.title + "&"
    } 
    if (search.status) {
      url = url + "status=" + search.status+ "&"
    }
    if (search.startDate) {
     url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    }
    if (search.endDate) {
       url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }
    if(search.limit) {
      url = url + "limit=" + search.limit + "&"
    }
    if(search.offset) {
      url = url + "offset=" + search.offset + "&"
    }
    return this.httpClient.get(url)

  }
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends BizOperationService<ActivityManage, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getActivity(search: any = {}) {
    let url = API_ADDON_URL + "?isTeam=true&"
    if (search.type) {
      url = url + "type=" + search.type + "&"
    } if (search.title) {
      url = url + "title=" + search.title + "&"
    } 
    if (search.status) {
      url = url + "status=" + search.status+ "&"
    }
    if (search.startDate) {
     url = url + "startDate=" + moment(search.startDate).format("YYYY-MM-DD") + "&"
    }
    if (search.endDate) {
       url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }
    if(search.limit) {
      url = url + "limit=" + search.limit + "&"
    }
    if(search.offset) {
      url = url + "offset=" + search.offset + "&"
    }
    return this.httpClient.get(url)

  }
}