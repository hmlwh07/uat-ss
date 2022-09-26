import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
// const { AES256 } = Plugins
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import * as shajs from 'sha.js';



// package com.bss.kbzms.common.util;

// import java.nio.charset.StandardCharsets;
// import java.security.MessageDigest;
// import java.security.NoSuchAlgorithmException;
// import java.util.Arrays;
// import java.util.Base64;

// import javax.crypto.Cipher;
// import javax.crypto.spec.SecretKeySpec;

// import com.bss.kbzms.exceptions.CoreApiException;

// public class AESEncryptionUtil {
//  private static SecretKeySpec secretKey;
//  private static byte[] key;
//  private static final String ALGORITHM = "AES";

//  public static void prepareSecreteKey() {
//   String myKey = "Blu3$t0ne";
//   MessageDigest sha = null;
//   try {
//    key = myKey.getBytes(StandardCharsets.UTF_8);
//    sha = MessageDigest.getInstance("SHA-1");
//    key = sha.digest(key);
//    key = Arrays.copyOf(key, 16);
//    secretKey = new SecretKeySpec(key, ALGORITHM);
//   } catch (NoSuchAlgorithmException e) {
//    e.printStackTrace();
//   }
//  }

//  public static String encrypt(String strToEncrypt) throws Exception {
//   try {
//    prepareSecreteKey();
//    Cipher cipher = Cipher.getInstance(ALGORITHM);
//    cipher.init(Cipher.ENCRYPT_MODE, secretKey);
//    return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
//   } catch (Exception e) {
//    throw new CoreApiException("Invalid Param", "400", "Invalid parameter value!");
//   }
//  }

//  public static String decrypt(String strToDecrypt) throws Exception {
//   try {
//    prepareSecreteKey();
//    Cipher cipher = Cipher.getInstance(ALGORITHM);
//    cipher.init(Cipher.DECRYPT_MODE, secretKey);
//    return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
//   } catch (Exception e) {
//    throw new CoreApiException("Invalid", "400", "Invalid parameter value!");
//   }
//  }
// }
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

  encryptData(data: {}) {
    try {
      const bytes =CryptoJS.AES.encrypt(JSON.stringify(data), environment.secureKey)
      if(bytes.toString()){
         let enc=btoa(bytes.toString(CryptoJS.enc.Utf8))
       return enc
      }
      // return 
      // return CryptoJS.AES.encrypt(JSON.stringify(data), environment.secureKey).toString();
    } catch (e) {
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

  encryptUsingAES256(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.secureKey)
    let _iv = CryptoJS.enc.Utf8.parse(this.secureKey);
    let bytes = btoa(CryptoJS.HmacSHA256(
      JSON.stringify(data), _key, {
        keySize: 16,
        iv:_iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      })
    )
      // Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
    this.encrypted = btoa(bytes.toString())
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