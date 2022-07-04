import { ChangeDetectorRef, Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, forkJoin, map, of } from 'rxjs';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
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
  submitted: boolean = false
  townShip: string[] = []
  stageOption: any[] = []
  stageCode: string
  townshipOption: any[] = []
  townshipCode: string
  typeOption: any[] = []
  typeCode: string
  @Input() group: FormGroup;
  @Input() config: ConfigInput

  constructor(
    public modal: NgbActiveModal,
    private cdf: ChangeDetectorRef,
    private masterDataService: MasterDataService
  ) { }

  ngOnInit() {
    this.setForm()
    this.getMaster()
    this.getTownship()
  }

  setForm() {
    this.nrcForm = new FormGroup({
      stage: new FormControl(null, [Validators.required]),
      township: new FormControl(null, [Validators.required]),
      prefix: new FormControl(null, [Validators.required]),
      nrc: new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern("[0-9]*")]),
    })
  }

  getMaster() {
    forkJoin([
      this.getStage(),
      this.getType()
    ]).toPromise().then((res: any) => {
      if (res) {
        this.stageOption = res[0]
        this.typeOption = res[1]
        this.cdf.detectChanges()
      }
    })
  }

  getStage() {
    return this.masterDataService.getDataByType("NRC_REGION").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }

  getTownship(parentId?) {
    this.masterDataService
      .getDataByParent("NRC_TOWNSHIP", parentId, "NRC_REGION")
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.townshipOption = res.map((x) => {
            return {
              code: x.codeId,
              value: x.codeName
            };
          });
          if (this.townshipOption.length > 0) {
            this.nrcForm.controls['township'].setValue(this.townshipOption[0])
            this.nrcForm.controls['prefix'].setValue(this.typeOption[5])
          }
          this.cdf.detectChanges();
        }
      });
  }

  getType() {
    return this.masterDataService.getDataByType("NRC_TYPE").pipe(map(x => this.getFormatOpt(x)), catchError(e => {
      return of([])
    }))
  }

  getFormatOpt(res) {
    return res.map(x => {
      return {
        'code': x.codeId || x.code,
        'value': (x.codeName || x.codeValue) || x.value
      }
    })
  }

  save() {
    this.submitted = true
    if (this.nrcForm.invalid) return false
    let value = this.nrcForm.value
    this.stageCode = value.stage.code ? value.stage.code : this.stageCode
    this.townshipCode = value.township.code ? value.township.code : this.townshipCode
    this.typeCode = value.prefix.code ? value.prefix.code : this.typeCode
    let nrc = `${value.stage.value}/${value.township.value}(${value.prefix.value})${value.nrc}`
    if (this.config.name)
      this.group.controls[this.config.name].setValue(nrc)
    if (this.config.nrcRegionCode)
      this.group.controls[this.config.nrcRegionCode].setValue(this.stageCode)
    if (this.config.nrcTownshipCode)
      this.group.controls[this.config.nrcTownshipCode].setValue(this.townshipCode)
    if (this.config.nrcTypeCode)
      this.group.controls[this.config.nrcTypeCode].setValue(this.typeCode)
    if (this.config.nrcNumber)
      this.group.controls[this.config.nrcNumber].setValue(value.nrc)
    if (this.config.identityNRC)
      this.group.controls[this.config.identityNRC].setValue(nrc)
    this.modal.dismiss('save');
  }

  dismiss() {
    this.modal.dismiss();
  }

  changeStage() {
    let changeValue = this.nrcForm.controls.stage.value
    if (changeValue) {
      let stage = this.stageOption.find((p) => p.code == changeValue.code);
      this.getTownship(stage.code)
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
