import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { AttachmentUploadService } from 'src/app/_metronic/core/services/attachment-data.service';
import { getFileReader } from '../../../core/get-file-reader';
import { ConfigInput } from '../field.interface';

@Component({
  selector: 'app-custom-input-alert',
  templateUrl: './custom-input-alert.component.html',
  styleUrls: ['./custom-input-alert.component.scss']
})
export class CustomInputAlertComponent implements OnInit {
  @Input() config: ConfigInput
  @Input() type
  @Input() status
  @Input() oldId: string = ""
  lostReason: any
  description: any
  fileData: any
  fileName: string = ""
  @ViewChild('selectedFile') selectedFileEl: ElementRef;
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal, private AttachmentUploadService: AttachmentUploadService, private cdf: ChangeDetectorRef, private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  save() {
    if (this.type == 'reason') {
      this.modal.dismiss(this.lostReason)
    }
    if (this.type == 'description') {
      this.modal.dismiss({ data: this.fileData, description: this.description })
    }
  }

  async importDocument(event) {
    if (event) {
      const file = event.target.files[0];
      if (event.target.files[0].size / (1024 * 1024) > 20) {
        this.alertService.activate('This file size is greater than 20MB.', 'Warning')
      } else {
        // console.log(file);
        const reader = getFileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // console.log(reader);
          if (reader.result) {
            let base64 = reader.result.toString().split(",")[1];
            let data = {
              fileStr: base64,
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              contentType: file.type,
              fileExtension: file.name.split('.').pop(),
            }
            this.fileName = file.name
            this.fileData = data
            this.cdf.detectChanges()
          };
        }

      }
    }


  }
  openFile() {
    this.selectedFileEl.nativeElement.click()
  }
}
