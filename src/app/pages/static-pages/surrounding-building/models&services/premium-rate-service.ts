import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { PremiumRate } from "./premium-rate-dto";

const API_FIRE_PREMIUM_RATE = `${environment.apiUrl}/fire/premium-rate`;

@Injectable({
  providedIn: 'root'
})
export class PremiumRateService extends BizOperationService<PremiumRate, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_PREMIUM_RATE);
  }
  

  getPremiumRate(buildingClass: string, occupationOfBuilding: string,typeOfBuilding:string) {
    return this.httpClient.get(API_FIRE_PREMIUM_RATE + "?classOfBuilding=" + buildingClass + "&occupationOfBuilding=" + occupationOfBuilding  + "&typeOfBuilding=" + typeOfBuilding)
  }
}
