import { Injectable } from '@angular/core';
import { ApiService } from '../app/api.service';

@Injectable({
  providedIn: 'root'
})
export class FireTopicService {
  private apiPath = "login-user/firebase/token.htm"
  constructor(private apiService: ApiService) { }


  doRegister(data: any) {
    return this.apiService.post(this.apiPath, data)
  }
}