import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireProductDTO } from "./fire-product.dto";

const API_POLICY_HOLDER_URL = `${environment.apiUrl}/policy/holder`;

@Injectable({
  providedIn: 'root'
})
export class PolicyHolderService extends BizOperationService<FireProductDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_POLICY_HOLDER_URL);
  }

  getOne(quo: string){
    console.log(quo,"data");
    return this.httpClient.get(API_POLICY_HOLDER_URL+"/"+quo)
  }
}