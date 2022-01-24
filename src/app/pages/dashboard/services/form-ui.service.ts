import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { FormUI } from '../models/form-ui.dto'
const API_FORMUI_URL = `${environment.apiUrl}/dynamicproduct`;

@Injectable({
  providedIn: 'root'
})
export class FormUIService extends BizOperationService<FormUI, number>{
  selectedForm: FormUI = {}
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_FORMUI_URL);
  }

  getByType() {
    return this.findAll().pipe(map(res => {
      if (!res) return res
      let forms = []
      let pages = []
      //console.log(res);
      let tempRes: any = {}
      res.map(x => {
        if (x.type == 'Form') {
          forms.push(x)
        } else {
          pages.push(x)
        }
      })
      tempRes = { forms, pages }
      return res
    }))
  }
}