import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BizOperationService } from "../../core/biz.operation.service";

const API_RESET_PASSOWRD_URL = `${environment.apiUrl}/reset/password`;
const API_GET_OTP_URL = `${environment.apiUrl}/otp`;
const API_VERIFY_OTP_URL = `${environment.apiUrl}/verify/otp`;
const API_VERIFY_PASSWORD_URL = `${environment.apiUrl}/verify/password`;

@Injectable({
  providedIn: 'root'
})
export class verifyPasswordService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_VERIFY_PASSWORD_URL);
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class resetPasswordService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_RESET_PASSOWRD_URL);
  }
  
}






@Injectable({
  providedIn: 'root'
})
export class OTPService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_GET_OTP_URL);
  }


}

@Injectable({
  providedIn: 'root'
})
export class VerifyOTPService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_VERIFY_OTP_URL);
  }


}

