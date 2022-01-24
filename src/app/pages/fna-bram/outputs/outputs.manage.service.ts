import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class OutputsService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllOutputsByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram/output');
  }

  saveOutputs(data) {
    return this.httpClient.post(API_ADDON_URL + '/asset', data);
  }

  deleteOutputsById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/asset/' + id);
  }

  updateOutputs(data) {
    return this.httpClient.put(API_ADDON_URL + '/asset/', data);
  }

}