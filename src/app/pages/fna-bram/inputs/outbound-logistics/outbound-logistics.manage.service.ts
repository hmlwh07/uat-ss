import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "../../../../../app/core/biz.operation.service";
import { environment } from "../../../../../environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class OutboundLogisticsService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllOutboundLogisticsByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram-outbound');
  }


  saveOutboundLogistics(data) {
    return this.httpClient.post(API_ADDON_URL + '/bram-outbound', data);
  }

  deleteOutboundLogisticsById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/bram-outbound/' + id);
  }

  updateOutboundLogistics(data) {
    return this.httpClient.put(API_ADDON_URL + '/bram-outbound', data);
  }



}