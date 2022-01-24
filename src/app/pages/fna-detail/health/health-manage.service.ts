import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";
import { HealthManage } from "./health-manage.dto";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FANHealthManageService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  saveHealth(data) {
    return this.httpClient.post(API_ADDON_URL + '/health' , data);
  }

  getAllHealth(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/health');
  }

  updateHealth(data) {
    return this.httpClient.put(API_ADDON_URL + '/health', data);
  }

  deleteHealthById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/health/'+ id);
  }

}