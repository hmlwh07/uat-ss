import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";
import { QuotationDTO } from "./quotation.dto";

const API_QUOTATION_URL = `${environment.apiUrl}/policy`

@Injectable({
  providedIn: 'root'
})
export class PolicyService extends BizOperationService<QuotationDTO, number>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_QUOTATION_URL);
  }

}