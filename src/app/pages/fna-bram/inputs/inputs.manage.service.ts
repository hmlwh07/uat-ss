import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "../../../../app/core/biz.operation.service";
import { environment } from "../../../../environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
const API_PRODUCT_URL = `${environment.apiUrl}/product-view`;

@Injectable({
  providedIn: 'root'
})
export class InputsService extends BizOperationService<any, number>{
  _fnaBRAMList: any;
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }


  getAllProducts() {
    return this.httpClient.get(API_PRODUCT_URL);
  }



  getAllInputByType(data, type) {
    let dataList = data.filter(x => x.type === type);
    return dataList
  }


  set fnaBRAMList(value: Array<any>) {
    this._fnaBRAMList = value;
  }

  get fnaBRAMList(): Array<any> {
    return this._fnaBRAMList;
  }


}