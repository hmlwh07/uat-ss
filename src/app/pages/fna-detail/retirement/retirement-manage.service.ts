import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FANRetirementService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getRetirement(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/retirement-saving');
  }

  saveRetirement(data) {
    return this.httpClient.post(API_ADDON_URL + '/retirement-saving' , data);
  }

  deleteRetirementById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/retirement-saving/'+ id);
  }

  updateRetirement(data) {
    return this.httpClient.put(API_ADDON_URL + '/retirement-saving/', data);
  }


  
}