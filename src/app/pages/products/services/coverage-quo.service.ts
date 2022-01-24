import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { QuoAddon } from "../models/product.dto";

const API_COVERAGE_URL = `${environment.apiUrl}/quotationCoverage`;

@Injectable({
  providedIn: 'root'
})
export class CoverageQuoService extends BizOperationService<QuoAddon, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_COVERAGE_URL);
  }
  getOne(id:number,quo: string){
    return this.httpClient.get(API_COVERAGE_URL+"/"+id+"/"+quo)
  }
  deleteAll(quo: any) {
    return this.httpClient.delete(API_COVERAGE_URL + "/quotation/" + quo)
  }
  getAllById(postData: any) {
    return this.httpClient.post(API_COVERAGE_URL +"s", postData)
  }
}