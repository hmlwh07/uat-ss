import { ChangeDetectorRef, Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigInput } from '../field.interface';
import { nrcData } from './nrc-data';

@Component({
  selector: 'app-nrc-popup',
  templateUrl: './nrc-popup.page.html',
  styleUrls: ['./nrc-popup.page.scss'],
})
export class NrcPopupPage implements OnInit {
  nrcStage = nrcData
  nrcForm: FormGroup
  submited: boolean = false
  townShip: string[] = []
  @Input() group: FormGroup;
  @Input() config: ConfigInput
  constructor(public modal: NgbActiveModal,private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.setForm()
  }

  setForm() {
    this.nrcForm = new FormGroup({
      "stage": new FormControl(null, [Validators.required]),
      "township": new FormControl(null, [Validators.required]),
      "prefix": new FormControl('N', [Validators.required]),
      "nrc": new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    })
  }

  save() {
    this.submited = true
    if (this.nrcForm.invalid) return false
    let value = this.nrcForm.value
    let nrc = `${value.stage}/${value.township}(${value.prefix})${value.nrc}`
    this.group.controls[this.config.name].setValue(nrc)
    this.modal.dismiss('save');
  }

  dismiss() {
    this.modal.dismiss();
  }

  changeStage() {
    let stage = this.nrcForm.value.stage
    if (stage) {
      let index = this.nrcStage.findIndex(x => x.stage == stage)
      this.townShip = index >= 0 ? this.nrcStage[index].township : []
      this.nrcForm.controls['township'].setValue(this.townShip[0])
      this.cdf.detectChanges()
    }
  }
  isControlValid(controlName: string): boolean {    
    const control = this.nrcForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.nrcForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.nrcForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.nrcForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
