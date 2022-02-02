import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { FireProductDTO } from "./fire-product.dto";

const API_FIRE_URL = `${environment.apiUrl}/fire-policy`;

@Injectable({
  providedIn: 'root'
})
export class FireProductService extends BizOperationService<FireProductDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_URL);
  }

  getOne(quo: string){
    console.log(quo,"data");
    
    return this.httpClient.get(API_FIRE_URL+"/resource?resourceId="+quo)
  }
}