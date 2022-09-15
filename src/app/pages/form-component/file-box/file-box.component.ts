import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { getFileReader } from '../../../core/get-file-reader';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { AttachmentUploadService } from '../../../_metronic/core/services/attachment-data.service';
import { Field, FUNCTION_TYPE } from '../field.interface';

@Component({
  selector: 'app-file-box',
  templateUrl: './file-box.component.html',
  styleUrls: ['./file-box.component.scss']
})
export class FileBoxComponent implements Field, OnInit, OnDestroy {

  group: FormGroup;
  config: any
  unSub: Subscription[] = []
  editStage: boolean
  alertMsg: string = ""
  // dummyText: string
  @ViewChild('selectedFile') selectedFileEl: ElementRef;
  constructor(
    private globalFun: GlobalFunctionService,
    private fileUpload: AttachmentUploadService,
    private loading: LoadingService,
    private cdf:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.listenFunData();
  }



  ngOnDestroy() {
    this.unSub.forEach((sb) => sb.unsubscribe());
  }

  doFunction(event) {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.TRIGGER) {
        this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue())
      }
    }
    this.handleUpload(event)
  }

  handleUpload(event) {
    if (event) {
      const file = event.target.files[0];
      // console.log(file);
      const reader = getFileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // console.log(reader);
        if (event.target.files[0].size / (1024 * 1024) > 20) {
          this.alertMsg = "This file size is greater than 20MB"
          this.cdf.detectChanges()
          // this.alertService.activate('This file size is greater than 20MB.', 'Warning')
        } else {
          if (reader.result) {
            this.alertMsg = ""
            this.cdf.detectChanges()
            let base64 = reader.result.toString().split(",")[1];
            let data = {
              fileStr: base64,
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              contentType: file.type,
              fileExtension: file.name.split('.').pop(),
            }
            this.loading.activate()
            this.fileUpload.save(data).toPromise().then((res) => {
              if (res) {
                this.group.controls[this.config.name].setValue(`[${res}].${data.fileName}`)
              }
              this.loading.deactivate()
            }).catch(e => {
              this.loading.deactivate()
            })
          };
        }
      }
    }
  }

  listenFunData() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.GETDATA) {
        this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
          this.group.controls[this.config.name].setValue(res)
        })
      }
    }
  }

  openFile() {
    if (this.editStage) return false
    this.selectedFileEl.nativeElement.click()
  }

}
// "fileName": "testpdf",
//     "fileType": "pdf",
//     "fileSize": "308,514",
//     "contentType": "application/pdf",
//     "fileExtension":"pdf"