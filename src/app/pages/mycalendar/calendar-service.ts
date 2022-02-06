import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "../../../environments/environment";

const API_URL = `${environment.apiUrl}/`;
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(protected httpClient: HttpClient) {
  }
}