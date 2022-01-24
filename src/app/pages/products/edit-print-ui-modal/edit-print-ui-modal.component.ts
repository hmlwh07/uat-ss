import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PrintCol } from '../models/print-config.interface';


@Component({
  selector: 'app-edit-print-ui-modal',
  templateUrl: './edit-print-ui-modal.component.html',
  styleUrls: ['./edit-print-ui-modal.component.scss'],
})
export class EditPrintUIModalComponent implements OnInit {
  @Input() title: string
  @Input() isTable: boolean
  @Input() colConfig: PrintCol = {}
  colForm: FormGroup
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private fb: FormBuilder) {

  }
  ngOnInit() {
    console.log(this.colConfig);
    
    this.colForm = this.fb.group({
      "size": [this.colConfig.size || false, Validators.compose([Validators.required, Validators.min(1), , Validators.max(12)])],
      "title": [this.colConfig.title || null, Validators.compose([Validators.required])],
      "background": [this.colConfig.background || null, Validators.compose([Validators.required])],
      "color": [this.colConfig.color || null, Validators.compose([Validators.required])],
      "rowspan": [this.colConfig.rowspan || null],
      "colspan": [this.colConfig.colspan || null],
      "align": [this.colConfig.align || 'center'],
    })
  }
  isControlValid(controlName: string): boolean {
    const control = this.colForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.colForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  save() {
    if (this.isTable) {
      if (!this.title) return false
      this.modal.dismiss({ data: this.title, type: 'save' })
    } else {
      if (this.colForm.invalid) return false
      let postData = { ...this.colConfig, ...this.colForm.value }
      this.modal.dismiss({ data: postData, type: 'save' })
    }
  }

}
