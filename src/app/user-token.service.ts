import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { environment } from "../environments/environment";
const API_TOKEN_URL = `${environment.apiUrl}/login-user/firebase/token`
@Injectable({
  providedIn: 'root'
})
export class UserTokenService {

  constructor(private http: HttpClient) { }


  updateToken(token: string) {
    return this.http.put(API_TOKEN_URL + "?firebaseToken=" + token, {})
  }

}