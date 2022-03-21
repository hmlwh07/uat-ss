import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";
const API_NOTI_URL = `${environment.apiUrl}/noti`;


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_NOTI_URL);
  }

  getById(id) {
    return this.httpClient.get(API_NOTI_URL + "/" + id)
  }
}