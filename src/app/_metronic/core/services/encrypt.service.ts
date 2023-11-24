import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EncryptService {
  constructor() {
  }
  enc() {

  }

  encryptData(data) {

    let id = data ? data.toString() : ''
    var secret = "Blu3$t0ne";
    if (data) {
      return CryptoJS.AES.encrypt(id, secret).toString();

    }
  }

  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, environment.secureKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
    }
  }

}