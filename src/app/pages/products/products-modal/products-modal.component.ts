import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { environment } from '../../../../environments/environment';
import { getFileReader } from '../../../core/get-file-reader';
import { LoadingService } from '../../../modules/loading-toast/loading/loading.service';
import { AttachmentUploadService } from '../../../_metronic/core/services/attachment-data.service';
import { Product } from '../models/product.dto'
import { ProductDataService } from '../services/products-data.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class ProductsModalComponent implements OnInit, OnDestroy {
  prodId: string = ""
  prodName: string = ""
  isLoading$;
  formGroup: FormGroup;
  lump: boolean = false
  annually: boolean = false
  private subscriptions: Subscription[] = [];
  oldData: Product = {}
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;
  statusCdOption = [
    {
      code: "01",
      value: "Draft"
    },
    {
      code: "02",
      value: "Active"
    },
  ]
  @ViewChild('selectedFile1') selectedFileEl1: ElementRef;
  @ViewChild('selectedFile2') selectedFileEl2: ElementRef;
  @ViewChild('selectedFile3') selectedFileEl3: ElementRef;
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal,
    private productService: ProductDataService,
    private fileUpload: AttachmentUploadService,
    private loading: LoadingService,
    private alertService: AlertService,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      productName: [this.oldData.name || null, Validators.compose([Validators.required, Validators.nullValidator])],
      productCode: [this.oldData.code || null, Validators.compose([Validators.required, Validators.nullValidator])],
      coverName: [this.oldData.coverName || null, Validators.compose([Validators.required, Validators.nullValidator])],
      type: [this.oldData.type || 'GENERAL', Validators.compose([Validators.required, Validators.nullValidator])],
      stamDuty: [this.oldData.stamDuty || false, Validators.compose([Validators.required, Validators.nullValidator])],
      isAllowBackDate: [this.oldData.isAllowBackDate || null, Validators.compose([Validators.required, Validators.nullValidator])],
      allowDays: [this.oldData.allowDays || null],
      ruleDate: [this.oldData.quotationDay || null, Validators.compose([Validators.required, Validators.nullValidator])],
      ruleType: [this.oldData.quotationRule || null, Validators.compose([Validators.required, Validators.nullValidator])],
      policyDay: [this.oldData.policyDay || null, Validators.compose([Validators.required, Validators.nullValidator])],
      policyRule: [this.oldData.policyRule || null, Validators.compose([Validators.required, Validators.nullValidator])],
      statusCd: [this.oldData.statusCd || "02", Validators.compose([Validators.required, Validators.nullValidator])],
      paymentFrequency: [this.oldData.paymentFrequencyType ? this.oldData.paymentFrequencyType.split(',') : null],
      icon: [this.oldData.icon ? this.oldData.icon : null],
      smallIcon: [this.oldData.smallIcon ? this.oldData.smallIcon : null],
      coverIcon: [this.oldData.coverIcon ? this.oldData.coverIcon : null],
    });

  }

  save() {
    if (this.formGroup.valid) {
      let formData = this.formGroup.value
      let data = {
        name: formData.productName,
        code: formData.productCode,
        coverName: formData.coverName,
        type: formData.type,
        quotationDay: formData.ruleDate,
        quotationRule: formData.ruleType,
        policyDay: formData.policyDay,
        policyRule: formData.policyRule,
        paymentFrequencyType: "",
        application: false,
        quotation: false,
        isAllowBackDate: formData.isAllowBackDate,
        allowDays: formData.isAllowDays,
        stamDuty: formData.stamDuty,
        statusCd: formData.statusCd
      }
      this.productService.save(data).toPromise().then(res => {
        if (res) {
          this.modal.dismiss({ data: this.formGroup.value, type: 'save' })
        }
      })
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  changePayment(type) {
    let value = this[type]
    let data: any[] = this.formGroup.value['paymentFrequency'] || []
    if (value) {
      data.push(type)
    } else {
      let index = data.findIndex(x => x == type)
      data.splice(index, 1)
    }
    this.formGroup.controls['paymentFrequency'].setValue(data);
  }

  openFile(type: string) {
    if (type == "cover")
      this.selectedFileEl3.nativeElement.click()
    else if (type == "small")
      this.selectedFileEl2.nativeElement.click()
    else
      this.selectedFileEl1.nativeElement.click()
  }
  
  handleUpload(event, type: string) {
    if (event) {
      const file = event.target.files[0];
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
          this.loading.activate()
          this.fileUpload.save(data).toPromise().then((res) => {
            if (res) {
              if (type == "cover") {
                this.formGroup.controls['coverIcon'].setValue(res)
              } else if (type == "small") {
                this.formGroup.controls['smallIcon'].setValue(res)
              } else {
                this.formGroup.controls['icon'].setValue(res)
              }
            }
            this.cdf.detectChanges()
            this.loading.deactivate()
          }).catch(e=>{
            this.loading.deactivate()
          })
        };
      }
    }
  }

  deleteEditModal() {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.modal.dismiss({ type: 'delete' });
      }
    });
  }

}
