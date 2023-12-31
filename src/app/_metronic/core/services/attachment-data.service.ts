import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lead } from "src/app/pages/lead-detail/lead.dto";
import { environment } from "../../../../environments/environment";
import { BizOperationService } from "../../../core/biz.operation.service";
import { AlertService } from "../../../modules/loading-toast/alert-model/alert.service";
import { LoadingService } from "../../../modules/loading-toast/loading/loading.service";
import { KBZToastService } from "../../../modules/loading-toast/toast/kbz-toast.service";
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Capacitor } from "@capacitor/core";
import write_blob from "capacitor-blob-writer";
import { Observable } from "rxjs";
import { LanguagesService } from "src/app/modules/languages/languages.service";
import { sha256, sha224 } from 'js-sha256';
import * as CryptoJS from 'crypto-js';
import { EncryptService } from "./encrypt.service";
import { Mediastore, SaveToDownloadsOptions } from "@agorapulse/capacitor-mediastore";
import { AndroidSettings, IOSSettings, NativeSettings } from "capacitor-native-settings";
import { Device } from "@capacitor/device";
import { AlertController, Platform } from "@ionic/angular";

const API_UPLOAD_URL = `${environment.apiUrl}/attachment-uploader`;
@Injectable({
  providedIn: 'root'
})
export class AttachmentUploadService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, API_UPLOAD_URL);
  }
}

const API_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;
const API_TCS_RENEWAL_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/tcs/renewal`;
const API_TCS_DOWNLOAD_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AttachmentDownloadService extends BizOperationService<any, number>{
  fileId: any = ''
  constructor(protected httpClient: HttpClient, private file: File,
    private loadingService: LoadingService, private toastService: KBZToastService,
    private alertService: AlertService,
    private translate: LanguagesService,
    private encryptService: EncryptService,
    private platform:Platform,
    private alertCtrl:AlertController) {
    super(httpClient, API_DOWNLOAD_URL);
  }

  getFile(fileName, policyNo) {
    let url = API_TCS_RENEWAL_DOWNLOAD_URL + "?"
    if (fileName) {
      url = url + "fileName=" + fileName + "&"
    }
    if (policyNo) {
      url = url + "policyNo=" + policyNo
    }
    // return this.httpClient.get(url, { responseType: 'blob' })
    return this.httpClient.get(url)
  }

  get(url: string, param?: HttpParams): Observable<any> {
    return this.httpClient.get(API_TCS_DOWNLOAD_URL + url, { params: param })
  }

  async mobileTCSDownload(fileName: string, res: any) {
    const url = URL.createObjectURL(res);
    this.file.checkDir(this.file.externalRootDirectory, 'kbzms_downloads').then(response => {
      this.createFile(fileName, res)
    }).catch(error => {
      this.file.createDir(this.file.externalRootDirectory, 'kbzms_downloads', false).then(response => {
        this.createFile(fileName, res)
      }).catch(async (e) => {
        console.log(e);
        await this.loadingService.deactivate()
        let msg = this.translate.transform("ERROR.file_error")
        this.alertService.activate(msg, 'Download File')
      })
    })

  }


  downloadTCSFile(data, fileName) {
    // const blob = new Blob([data], { type: 'text/csv' });
    // const url= window.URL.createObjectURL(blob);
    // window.open(url);
    var a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = fileName;
    a.click();
    let msg = this.translate.transform("ERROR.download_success")
    this.alertService.activate(msg, 'Download File')
    a.remove()
  }


  async getDownload(id, fileName: string) {
    this.fileId = this.encryptService.encryptData(id)
    console.log(this.fileId);

    if(this.fileId){
    this.httpClient.get(API_DOWNLOAD_URL + "?id=" + this.fileId, { responseType: 'blob' }).toPromise().then((res) => {
      if (res) {
        if (Capacitor.isNativePlatform()) {
          this.mobileDownload(fileName, res)
        } else {
          this.downloadFile(res, fileName)
        }
      }
      // this.downloadFile(res, fileName)
    })
    }
  }

  downloadFile(data, fileName) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = fileName;
    a.click();
    a.remove()
  }

  // async mobileDownload(fileName: string, res: any) {
  //   try {
  //     let ret = await Filesystem.mkdir({
  //       path: 'kbzsale_downloads',
  //       directory: Directory.Documents,
  //       recursive: false,
  //     });
  //     // console.log("folder ", ret);
  //     this.createFile(fileName, res)
  //   } catch (e) {
  //     this.createFile(fileName, res)
  //     //console.error("Unable to make directory", e);
  //   }
  // }

  // async createFile(fileName, blobFile) {
  //   try {
  //     await write_blob({
  //       path: "kbzsale_downloads/" + fileName,
  //       directory: Directory.Documents,
  //       blob: blobFile
  //     })
  //     await this.loadingService.deactivate()
  //     this.alertService.activate('"Download File', 'Success Message');
  //   } catch (error) {
  //     await this.loadingService.deactivate()
  //     this.alertService.activate('"Download Fail', 'Error Message');
  //   }

  // }

  async mobileDownload(fileName: string, res: any) {
    const device = await Device.getInfo();
    const url = URL.createObjectURL(res);
    let dir: any;
    if (this.platform.is('android') && parseInt(device.osVersion) >= 10) {
      dir = this.file.externalCacheDirectory;
    } else if (this.platform.is('android') && parseInt(device.osVersion) < 10) {
      dir = this.file.externalRootDirectory;
    } else {
      dir = this.file.documentsDirectory
    }

    if (this.platform.is('android') && parseInt(device.osVersion) >= 10) {
      this.saveFile(dir, fileName, res)
      .then(res => { this.showSuccess(); })
      .catch(e => { this.showError(e); });
    } else {
      // externalApplicationStorageDirectory
      this.file.checkDir(dir, 'kbzms_downloads').then(response => {
        this.createFile(fileName, res)
      }).catch(error => {
        this.file.createDir(dir, 'kbzms_downloads', false).then(response => {
          this.createFile(fileName, res)
        }).catch(async (e) => {
          this.showError(e);
        })
      })

    }
}

createFile(fileName, blobFile) {
    let dir: any;
    if (this.platform.is('android')) {
      dir = this.file.externalRootDirectory;
    } else {
      dir = this.file.documentsDirectory
    }
    this.file.writeFile(dir + "/Download", fileName, blobFile, { replace: true }).then(async (res) => {
      this.showSuccess();
    }).catch(async (e) => {
      this.showError(e, 'Warning')
    })
}



  async showSuccess() {
    await this.loadingService.deactivate()
    let msg = this.translate.transform("ERROR.download_success");
    let msg_android = this.translate.transform("ERROR.download_success_android")

    if (this.platform.is('android')) {
      this.alertService.activate(msg_android, 'Download File')
    } else {
      this.alertService.activate(msg_android, 'Download File')
    }
}

async showError(e = null, header = 'Download File') {
    console.log(e);
    await this.loadingService.deactivate()
    if (this.platform.is('android')) {
      let msg = this.translate.transform("ERROR.file_path_warning")
      // let alert = await this.alertCtrl.create({
      //   header: 'Warning',
      //   message: msg,
      //   buttons: [
      //     { role: "cancel", text: "Cancel" },
      //     { role: "ok", text: "OK" },
      //   ],
      //   backdropDismiss: false,
      //   cssClass: "my-customer-alert",
      // });
      // await alert.present();
      // alert.onDidDismiss().then((res) => {
      //   if (res.role == "ok") {
      //     this.openAndroidSetting()
      //   }
      // });
      this.alertService.activate(msg, 'Download File').then((res: any) => {
        if (res.type == 'ok'){
          this.openAndroidSetting()
        }
      });

    } else {
      let msg = this.translate.transform("ERROR.file_error")
      this.alertService.activate(msg, 'Download File')
    }
}
openAndroidSetting() {
  NativeSettings.openAndroid({
    option: AndroidSettings.ApplicationDetails,
  })
}

// over Android Version 10 
async saveFile (dir, fileName: string, fileData: string) {
    await this.file.writeFile(dir, fileName, fileData, { replace: true });
    const cachePath = await this.file.resolveDirectoryUrl(dir);
    var filePath = cachePath.nativeURL + fileName;
    await this.saveFileToDownloadsFolder(fileName, filePath);
    await this.file.removeFile(dir, fileName);
}

async saveFileToDownloadsFolder (fileName: string, filePath: string) {
    return await Mediastore.saveToDownloads({
      filename: fileName,
      path: filePath
    } as SaveToDownloadsOptions);
}


}



const ATTAcHMENT_REF = `${environment.apiUrl}/attachment-ref`;
@Injectable({
  providedIn: 'root'
})
export class AttachmentServiceRef extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient) {
    super(httpClient, ATTAcHMENT_REF);
  }
  getAttachmentListRef(refDocNo, refDocType) {
    return this.httpClient.get(ATTAcHMENT_REF + "?refDocNo=" + refDocNo + "&refDocType=" + refDocType)
  }
}