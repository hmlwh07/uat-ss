import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
// const { AES256 } = Plugins
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import * as shajs from 'sha.js';
@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  private secureKey: string='Blu3$t0ne';
  private secureIV: string;
  encrypted: any = "";
  decrypted: string;

  request: string;
  responce: string;
  constructor() {
  }

  // encryptData(data: {}) {
  //   try {
  //     return CryptoJS.AES.encrypt(JSON.stringify(data), environment.secureKey).toString();
  //   } catch (e) {
  //   }
  // }
  // decryptData(data) {
  //   try {
  //     const bytes = CryptoJS.AES.decrypt(data, environment.secureKey);
  //     if (bytes.toString()) {
  //       return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //     }
  //     return data;
  //   } catch (e) {
  //   }
  // }

  encryptUsingAES256(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.secureKey)
    let _iv = CryptoJS.enc.Utf8.parse(this.secureKey);
    let encrypted = btoa(CryptoJS.HmacSHA256(
      JSON.stringify(data), _key, {
        keySize: 16,
        iv:_iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      })
    )
      // Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
    this.encrypted = encrypted.toString();
    return this.encrypted
  }



  decryptUsingAES256(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.secureKey);
    let _iv = CryptoJS.enc.Utf8.parse(this.secureKey);

    this.decrypted = CryptoJS.AES.decrypt(
      data, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
      return this.decrypted
  }
   


}