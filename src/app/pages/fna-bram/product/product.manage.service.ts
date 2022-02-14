import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BizOperationService } from "../../../../app/core/biz.operation.service";
import { environment } from "../../../../environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FNAProductService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllProductRec(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram/quotation');
  }

  saveProduct(data) {
    return this.httpClient.post(API_ADDON_URL + '/asset', data);
  }

  deleteProductById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/asset/' + id);
  }

  updateProduct(data) {
    return this.httpClient.put(API_ADDON_URL + '/asset/', data);
  }

}