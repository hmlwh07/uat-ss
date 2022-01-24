import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class HumanResourcesService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllHumanResourcesByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram-hr');
  }

  saveHumanResources(data) {
    return this.httpClient.post(API_ADDON_URL + '/bram-hr', data);
  }

  deleteHumanResourcesById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/bram-hr/' + id);
  }

  updateHumanResources(data) {
    return this.httpClient.put(API_ADDON_URL + '/bram-hr', data);
  }

  getAllHumanResourcesQuestionnaireByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/questionnaire/hr');
  }

  saveHumanResourcesQuestionnaire(data) {
    return this.httpClient.post(API_ADDON_URL + '/questionnaire/hr', data);
  }

  deleteHumanResourcesQuestionnaireById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/questionnaire/hr/' + id);
  }

  updateHumanResourcesQuestionnaire(data) {
    return this.httpClient.put(API_ADDON_URL + '/questionnaire/hr', data);
  }



}