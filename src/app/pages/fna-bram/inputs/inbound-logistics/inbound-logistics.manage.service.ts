import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "../../../../../app/core/biz.operation.service";
import { environment } from "../../../../../environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
const API_PRODUCT_URL = `${environment.apiUrl}/product-view`;

@Injectable({
  providedIn: 'root'
})
export class InboundlogisticsService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllInboundlogisticsByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram-inbound');
  }

  saveInboundlogistics(data) {
    return this.httpClient.post(API_ADDON_URL + '/bram-inbound', data);
  }

  deleteInboundlogisticsById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/bram-inbound/' + id);
  }

  updateInboundlogistics(data) {
    return this.httpClient.put(API_ADDON_URL + '/bram-inbound', data);
  }

  getInboundByType(data, type) {
    let dataList = data.filter(x => x.type === type);
    return dataList
  }


}