import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_ADDON_URL = `${environment.apiUrl}/fna`;
@Injectable({
  providedIn: 'root'
})
export class ManagementInfrastructureService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_ADDON_URL);
  }

  getAllManagementInfrastructureByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/infrastructure');
  }

  saveManagementInfrastructure(data) {
    return this.httpClient.post(API_ADDON_URL + '/infrastructure', data);
  }

  deleteManagementInfrastructureById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/infrastructure/' + id);
  }

  updateManagementInfrastructure(data) {
    return this.httpClient.put(API_ADDON_URL + '/infrastructure', data);
  }

  getAllManagemenQuestionnaireByfnaId(fnaId) {
    return this.httpClient.get(API_ADDON_URL + '/' + fnaId + '/questionnaire/infra');
  }

  saveManagementQuestionnaire(data) {
    return this.httpClient.post(API_ADDON_URL + '/questionnaire/infra', data);
  }

  deleteManagementQuestionnaireById(id) {
    return this.httpClient.delete(API_ADDON_URL + '/questionnaire/infra/' + id);
  }

  updateManagementQuestionnaire(data) {
    return this.httpClient.put(API_ADDON_URL + '/questionnaire/infra', data);
  }





}