import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class TechnologyService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllTechnologyByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/bram-technology');
  }

  saveTechnology(data) {
    return this.httpClient.post(API_ADDON_URL + '/bram-technology', data);
  }

  deleteTechnologyById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/bram-technology/' + id);
  }

  updateTechnology(data) {
    return this.httpClient.put(API_ADDON_URL + '/bram-technology', data);
  }

  getAllTechnologyQuestionnaireByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/questionnaire/tech');
  }

  saveTechnologyQuestionnaire(data) {
    return this.httpClient.post(API_ADDON_URL + '/questionnaire/tech', data);
  }

  deleteTechnologyQuestionnaireById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/questionnaire/tech/' + id);
  }

  updateTechnologyQuestionnaire(data) {
    return this.httpClient.put(API_ADDON_URL + '/questionnaire/tech', data);
  }



}