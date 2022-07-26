import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { flatMap, mergeMap, switchMap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { getMasterValue } from "../../core/master-data-map";
import { MasterDataService } from "../../modules/master-data/master-data.service";
import { ConfigInput } from "../form-component/field.interface";

const API_PAGEDATA_URL = `${environment.apiUrl}/pagedata`;

@Injectable({ providedIn: 'root' })
export class PageDataService extends BizOperationService<any, number>{

  constructor(protected httpClient: HttpClient, private masterData: MasterDataService) {
    super(httpClient, API_PAGEDATA_URL);
  }

  getDetail(table: any, resourceId: any, id: any, view: boolean = false, colums: ConfigInput[] = [], editing: boolean = false) {
    return this.httpClient.get(API_PAGEDATA_URL + "/" + table + "/" + resourceId + "/" + id).pipe(mergeMap((res: any) => {
      if (view) {
        return getMasterValue(this.masterData, res, colums, editing)
      }
      return of(res)
    }))
  }

  deleteData(table, refID, id) {
    return this.httpClient.delete(API_PAGEDATA_URL + "/" + table + "/" + refID + "/" + id)
  }

  updatePremimun(postData: any): Observable<any> { 
    return this.httpClient.put(API_PAGEDATA_URL + "/resource", postData)
  }

  updateRiskId(postData:any){
    // console.log("updateRiskId",postData);
    return this.httpClient.put(API_PAGEDATA_URL + "/update-riskId", postData)
  }
  // updateStatus(data){
  //   return this.httpClient.put(API_PAGEDATA_URL + "/resource",data)
  // }

}