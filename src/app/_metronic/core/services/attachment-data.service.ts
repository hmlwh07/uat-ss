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
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import write_blob from "capacitor-blob-writer";
import { Observable } from "rxjs";
import { LanguagesService } from "src/app/modules/languages/languages.service";

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
const API_TCS_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/tcs`;
@Injectable({
  providedIn: 'root'
})
export class AttachmentDownloadService extends BizOperationService<any, number>{
  constructor(protected httpClient: HttpClient, private file: File, 
    private loadingService: LoadingService, private toastService: KBZToastService, 
    private alertService: AlertService, 
    private translate: LanguagesService) {
    super(httpClient, API_DOWNLOAD_URL);
  }

  getFile(url) {
    return this.httpClient.get(API_TCS_DOWNLOAD_URL + url, { responseType: 'blob' })
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

  getDownload(id, fileName: string) {
    this.httpClient.get(API_DOWNLOAD_URL + "/" + id, { responseType: 'blob' }).toPromise().then((res) => {
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

  downloadFile(data, fileName) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(data);
    a.download = fileName;
    a.click();
    a.remove()
  }

  async mobileDownload(fileName: string, res: any) {
    try {
      let ret = await Filesystem.mkdir({
        path: 'kbzsale_downloads',
        directory: Directory.Documents,
        recursive: false,
      });
      // console.log("folder ", ret);
      this.createFile(fileName, res)
    } catch (e) {
      this.createFile(fileName, res)
      //console.error("Unable to make directory", e);
    }
  }

  async createFile(fileName, blobFile) {
    try {
      await write_blob({
        path: "kbzsale_downloads/" + fileName,
        directory: Directory.Documents,
        blob: blobFile
      })
      await this.loadingService.deactivate()
      this.alertService.activate('"Download File', 'Success Message');
    } catch (error) {
      await this.loadingService.deactivate()
      this.alertService.activate('"Download Fail', 'Error Message');
    }

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