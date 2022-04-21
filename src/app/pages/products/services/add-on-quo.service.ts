import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { QuoAddon } from "../models/product.dto";

const API_ADDON_URL = `${environment.apiUrl}/quotationAddon`;

@Injectable({
  providedIn: 'root'
})
export class AddOnQuoService extends BizOperationService<QuoAddon, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getOne(id?: number, quo?: string,optionId?: string) {
    return this.httpClient.get(API_ADDON_URL + "/" + id + "/" + quo + "/" + optionId)
  }
  deleteAll(quo: any,optionId: string) {
    return this.httpClient.delete(API_ADDON_URL + "/quotation/" + quo + "/" + optionId)
  }

  getAllById(postData: any) {
    return this.httpClient.post(API_ADDON_URL +"s", postData)
  }
}