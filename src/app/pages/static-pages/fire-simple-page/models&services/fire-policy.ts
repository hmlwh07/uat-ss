import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireProductDTO } from "./fire-product.dto";
import { map } from "rxjs/operators";

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
  getMasterDataSale(codeBookRequest) {
    return this.httpClient.post(environment.apiUrl+ "/codebook", codeBookRequest).pipe(map((masterValues: any) => {
      let obj = {}
      masterValues.map(x => {
        obj[x.codeType] = x.codeName
      })
      return obj
    }))
  }
}