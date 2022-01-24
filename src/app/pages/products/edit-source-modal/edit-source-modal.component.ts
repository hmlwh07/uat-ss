import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { PrintCol } from '../models/print-config.interface';


@Component({
  selector: 'app-edit-source-modal',
  templateUrl: './edit-source-modal.component.html',
  styleUrls: ['./edit-source-modal.component.scss'],
})
export class EditSourceModalComponent implements OnInit {
  @Input() oldData: any = {}
  sourceForm: FormGroup
  leadSources: any[] = []
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef, private fb: FormBuilder, private masterData: MasterDataService) {

  }
  ngOnInit() {
    this.masterData.getDataByType("LEAD_SOURCE").toPromise().then((res: any) => {
      if (res) {
        this.leadSources = res
      }
    })
    this.sourceForm = this.fb.group({
      "leadSource": [this.oldData.leadSource || false, Validators.compose([Validators.required])],
      "period": [this.oldData.period || null, Validators.compose([Validators.required])],
      "periodType": [this.oldData.periodType || 'day', Validators.compose([Validators.required])],
    })
  }
  isControlValid(controlName: string): boolean {
    const control = this.sourceForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.sourceForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  save() {
    if (this.sourceForm.invalid) return false
    let postData = { ...this.oldData, ...this.sourceForm.value }
    let value = this.leadSources.find(x => postData.leadSource == x.codeId)
    this.modal.dismiss({ data: { ...postData, sourceValue: value.codeName }, type: 'save' })
  }

}
