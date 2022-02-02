import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "../../../../../app/core/biz.operation.service";
import { environment } from "../../../../../environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class BRAMServiceService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllBRAMServiceByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram-service');
  }

  saveBRAMService(data) {
    return this.httpClient.post(API_ADDON_URL + '/bram-service', data);
  }

  deleteBRAMServiceById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/bram-service/' + id);
  }

  updateBRAMService(data) {
    return this.httpClient.put(API_ADDON_URL + '/bram-service', data);
  }



}