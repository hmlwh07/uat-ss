import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FANAssetService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllAsset(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/asset');
  }

  saveAsset(data) {
    return this.httpClient.post(API_ADDON_URL + '/asset' , data);
  }

  deleteAssetById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/asset/'+ id);
  }

  updateAsset(data) {
    return this.httpClient.put(API_ADDON_URL + '/asset/', data);
  }


  
}