import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SignaturePad } from "angular2-signaturepad";
import { AttachmentUploadService } from '../../../_metronic/core/services/attachment-data.service';


@Component({
  selector: 'app-resourse-detail',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent implements OnInit, AfterViewInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor(public modal: NgbActiveModal,private fileUpload: AttachmentUploadService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
  clearSign() {
    this.signaturePad.clear()
  }
  saveSign() {
    console.log(this.signaturePad.toDataURL());
    let base64 = this.signaturePad.toDataURL().toString().split(",")[1];
    var sizeInBytes = 4 * Math.ceil((base64.length / 3)) * 0.5624896334383812;
    let data = {
      fileStr: base64,
      fileName: new Date().getTime(),
      fileType: 'png',
      fileSize: sizeInBytes,
      contentType: 'png',
      fileExtension: 'png',
    }
    // this.loading.activate()
    this.fileUpload.save(data).toPromise().then((res) => {
      if (res) {
        this.modal.dismiss({ data: res, type: 'save' })
      }
    })
  }
}