import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";
import { MONTHLY_PREMIUM_RATE } from "./education-manage.dto";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class FANEducationService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllEducation(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/education');
  }

  saveEducation(data) {
    return this.httpClient.post(API_ADDON_URL + '/education', data);
  }

  deleteDeleteById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/education/' + id);
  }

  updateEducation(data) {
    return this.httpClient.put(API_ADDON_URL + '/education', data);
  }

  getFNAEducationPremiumRate(age, trem): any {
    let premiumRate = [];
    let rate: any;

    premiumRate = MONTHLY_PREMIUM_RATE.filter(data =>
      data.age == age);
    if (trem == 9) {
      rate = premiumRate[0].nine;
    }
    if (trem == 11) {
      rate = premiumRate[0].eleven;
    }
    if (trem == 14) {
      rate = premiumRate[0].fourteen;
    }
    return rate;
  }



}