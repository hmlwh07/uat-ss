import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { QuotationDTO } from "./quotation.dto";

const API_QUOTATION_URL = `${environment.apiUrl}/quotation`

@Injectable({
  providedIn: 'root'
})
export class QuotationService extends BizOperationService<QuotationDTO, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_QUOTATION_URL);
  }
  getQuoList(search: any = {}) {
    let url = API_QUOTATION_URL+ "?"
    if (search.isTeam) {
     url = url + "isTeam=" +search.isTeam+ "&"
    }
    if (search.startDate) {
      url = url + "startDate=" + moment(search.openDateStr).format("YYYY-MM-DD") + "&"
     }
    if (search.endDate) {
       url = url + "endDate=" + moment(search.endDate).format("YYYY-MM-DD") + "&"
    }

    return this.httpClient.get(url)

  }
}