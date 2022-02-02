import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { BizOperationService } from "../../../../core/biz.operation.service";
import { CalculatedBuildingDTO } from "./calculated-building.dto";

const API_FIRE_CONTENT = `${environment.apiUrl}/fire-policy/content`;
const API_FIRE_PLANT = `${environment.apiUrl}/fire-policy/plant-machinery`;
const API_FIRE_STOCK = `${environment.apiUrl}/fire-policy/stock`;
// const API_FIRE_STOCK_RISK = `${environment.apiUrl}/fire-policy/risk/`
//{riskId}/stock
@Injectable({
  providedIn: 'root'
})
export class FireContentService extends BizOperationService<CalculatedBuildingDTO, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_CONTENT);
  }
}

@Injectable({
  providedIn: 'root'
})
export class FirePLantService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_PLANT);
  }
}

@Injectable({
  providedIn: 'root'
})
export class FireStockService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FIRE_STOCK);
  }
}
