import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { validateAllFields } from '../../../core/valid-all-feild';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { BtnConfig, ConfigInput, InputBoxType, InputType, OptionValue, ValidationType } from '../field.interface';


@Component({
  selector: 'app-edit-input-modal',
  templateUrl: './edit-input-modal.component.html',
  styleUrls: ['./edit-input-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class EditInputModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() input: InputBoxType;
  activePage: number = 1;
  @Input() config: ConfigInput;
  @Input() isTable: boolean = false
  @Input() isParty: boolean = false
  // isLoading$;
  formGroup: FormGroup;
  optformGroup: FormGroup;
  validFormGroup: FormGroup;
  funFormGroup: FormGroup;
  parentFormGroup: FormGroup;
  optionData: OptionValue[] = []
  parentValue: any[] = [{ 'data0': "" }]
  private subscriptions: Subscription[] = [];
  masterType: any[] = []
  functionName: any[] = []
  formatter = (result: any) => result;

  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal,
    private masterData: MasterDataService
  ) { }

  ngOnInit(): void {
    this.subscriptions[0] = this.masterData.masterType$.subscribe((res) => {

      this.masterType = res || []
    })
    this.masterData.getDataByType('INPUT_FUN').pipe(map((res: any) => {
      return res.map(x => x.codeName)
    })).toPromise().then((res: any) => {
      this.functionName = res
    })
    this.optformGroup = this.fb.group({
      text: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      textMM: [''],
      value: ['', Validators.compose([Validators.required, Validators.nullValidator])],
      field: [''],
    })
    this.parentFormGroup = this.fb.group({
      isParent: [false],
      show: [false],
      isRelated: [false],
      isArray: [false],
      parentName: [''],
      relatedField: ['parentId'],
    })
    this.validFormGroup = this.fb.group({
      requiredInp: [false],
      requireMessage: [''],
      requireMessageMM: [''],
      minInp: [false],
      isdob: [false],
      minMessage: [''],
      minMessageMM: [''],
      minValue: [''],
      maxInp: [false],
      maxMessage: [''],
      maxMessageMM: [''],
      maxValue: [''],
      from: [''],
      to: [''],
      dateType: ['day'],
      dateMessage: [''],
      dateMessageMM: ['']
    })
    this.funFormGroup = this.fb.group({
      isFun: [false],
      funName: [''],
      type: ['getdata'],
    })
    this.loadConfig();
    this.initValid();
    this.initParent()
    this.initFunction()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.masterType.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchFunName: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.functionName.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  initValid() {

    if (this.config.validation) {
      this.config.validation.forEach(x => {
        if (x.type == ValidationType.REQUIRED) {
          this.validFormGroup.controls['requiredInp'].setValue(true);
          this.validFormGroup.controls['requireMessage'].setValue(x.message);
          this.validFormGroup.controls['requireMessageMM'].setValue(x.messageMM);
        } else if (x.type == ValidationType.MIN) {
          this.validFormGroup.controls['minInp'].setValue(true);
          this.validFormGroup.controls['minValue'].setValue(x.value);
          this.validFormGroup.controls['minMessage'].setValue(x.message);
          this.validFormGroup.controls['minMessageMM'].setValue(x.messageMM);
        } else if (x.type == ValidationType.MAX) {
          this.validFormGroup.controls['maxInp'].setValue(true);
          this.validFormGroup.controls['maxValue'].setValue(x.value);
          this.validFormGroup.controls['maxMessage'].setValue(x.message);
          this.validFormGroup.controls['maxMessageMM'].setValue(x.messageMM);
        }
        // if (this.input == 'date' && (x.type == ValidationType.MIN || x.type == ValidationType.MAX)) {
        // }
        if (x.to || x.from) {
          this.validFormGroup.controls['to'].setValue(x.to);
          this.validFormGroup.controls['from'].setValue(x.from);
          this.validFormGroup.controls['dateMessage'].setValue(x.message);
          this.validFormGroup.controls['dateMessageMM'].setValue(x.messageMM);
          this.validFormGroup.controls['dateType'].setValue(x.dateType);
        }
      })
      if (this.config.validation.length > 0) {
        this.validFormGroup.controls['isdob'].setValue(this.config.validation[0].isAge);
      }
    }

  }

  initParent() {
    if (this.config.dependency) {
      const parent = this.config.dependency
      if (parent.parentName) {
        this.parentFormGroup.setValue({
          isParent: true,
          show: parent.show,
          isRelated: parent.isRelated,
          isArray: parent.isArray,
          parentName: parent.parentName,
          relatedField: parent.relatedField,
        })
      }
    }

  }

  initFunction() {
    if (this.config.isFun) {
      const func = this.config.inpFunction
      if (func.funName) {
        this.funFormGroup.setValue({
          isFun: true,
          funName: func.funName,
          type: func.type
        })
      }
    }
  }

  loadConfig() {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      label: [this.config.label, Validators.compose([Validators.required, Validators.nullValidator])],
      labelMM: [this.config.labelMM],
      name: [{ value: this.config.name, disabled: this.config.name ? true : false }, Validators.compose([Validators.required, Validators.nullValidator, Validators.pattern("^[a-z_]*$")])],
      coreName: [this.config.coreName, Validators.compose([Validators.required, Validators.nullValidator])],
      isLabel: [this.config.isLabel, Validators.compose([Validators.required, Validators.nullValidator])],
      size: [this.config.size, Validators.compose([Validators.required, Validators.nullValidator, Validators.max(12), Validators.min(2)])],
      mdSize: [this.config.mdSize, Validators.compose([Validators.required, Validators.nullValidator, Validators.max(12), Validators.min(2)])],
      lgSize: [this.config.lgSize, Validators.compose([Validators.required, Validators.nullValidator, Validators.max(12), Validators.min(2)])],
      inlineStyle: [this.config.inlineStyle, Validators.compose([Validators.required, Validators.nullValidator])],
      labelSize: [this.config.labelSize, Validators.compose([Validators.nullValidator, Validators.max(12), Validators.min(2)])],
      inputSize: [this.config.inputSize, Validators.compose([Validators.nullValidator, Validators.max(12), Validators.min(2)])],
      show: [this.config.show, Validators.compose([Validators.required, Validators.nullValidator])],
      master: [this.config.master ? this.config.master : 'false', Validators.compose([Validators.required, Validators.nullValidator])],
      readonly: [this.config.readonly, Validators.compose([Validators.required, Validators.nullValidator])],
      disabled: [this.config.disabled, Validators.compose([Validators.required, Validators.nullValidator])],
      placeholder: [this.config.placeholder],
      placeholderMM: [this.config.placeholderMM],
      break: [this.config.break],
      masterData: [this.config.masterData],
      value: [this.config.value || ""],
      isHideView: [this.config.isHideView || false],
      policyterm: [this.config.policyterm || false],
      tableTitle: [this.config.tableTitle || ""],
      party: [this.config.party || false],
      isCurrency: [this.config.isCurrency || false]
    });
    if (this.input == InputBoxType.INPUT || this.input == InputBoxType.FILE || this.input == InputBoxType.DIALOG || this.input == InputBoxType.DATE) {
      let def = this.input == InputBoxType.DATE ? this.config.type || "date" : this.config.type || "";
      this.formGroup.addControl('type', new FormControl(def, Validators.required));
      if (this.input == InputBoxType.DATE) {
        this.changeDateType(this.config.type || 'date')
      }
    }
    else if (this.input == InputBoxType.SELECT || this.input == InputBoxType.CHECKBOX || this.input == InputBoxType.RADIO) {
      if (this.input == InputBoxType.SELECT)
        this.formGroup.addControl('type', new FormControl(this.config.type || "select", Validators.required));
      this.formGroup.addControl('multi', new FormControl(this.config.multi ? this.config.multi : false, Validators.required));
      // this.formGroup.addControl('options', new FormControl(this.config.options, Validators.required));
      this.formGroup.addControl('masterData', new FormControl(this.config.masterData || ""));
      this.formGroup.addControl('valueField', new FormControl(this.config.valueField || "codeId"));
      this.formGroup.addControl('showField', new FormControl(this.config.showField || "codeName"));
      this.optionData = this.config.options ? this.config.options : []
    }
    if (this.input == InputBoxType.DIALOG) {
      this.optformGroup.controls['field'].setValidators([Validators.required])
      this.formGroup.addControl('valueField', new FormControl(this.config.valueField || "codeId", Validators.required));
      this.optionData = this.config.autoFields ? this.config.autoFields : []
    }
    if (this.config.dependency) {
      if (this.config.dependency.isArray) {
        this.parentValue = []
        this.config.dependency.value.forEach((x, index) => {
          let data = {}
          data['data' + index] = x
          this.parentValue.push(data);
        })
      } else {
        this.parentValue = [{ "data0": this.config.dependency.value }]
      }
    }


  }

  changePolicy() {
    if (this.formGroup.value['type'] != 'select') {
      this.formGroup.controls['master'].setValue('true')
      if (this.formGroup.value['type'] == 'policy')
        this.formGroup.controls['policyterm'].setValue(true)
      else
        this.formGroup.controls['policyterm'].setValue(false)
    } else {
      this.formGroup.controls['master'].setValue('false')
      this.formGroup.controls['policyterm'].setValue(false)
    }
  }

  changeDateType(value) {
    //console.log(value);

    if (value != 'date') {
      this.formGroup.addControl('endName', new FormControl(this.config.endName || "", Validators.required));
      this.formGroup.addControl('endCoreName', new FormControl(this.config.endCoreName || "", Validators.required));
      this.formGroup.addControl('endLabel', new FormControl(this.config.endLabel || "", Validators.required));
      this.formGroup.addControl('endLabelMM', new FormControl(this.config.endLabelMM || ""));
      // this.formGroup.addControl('parentDateLimit', new FormControl(this.config.parentDateLimit || "", Validators.required));
    } else {
      this.formGroup.removeControl('endName');
      this.formGroup.removeControl('endCoreName');
      this.formGroup.removeControl('endLabel');
      this.formGroup.removeControl('endLabelMM');
      // this.formGroup.removeControl('parentDateLimit');
    }
    this.formGroup.updateValueAndValidity();
  }

  submitValid() {

  }

  removeValue(index: number) {
    this.parentValue.splice(index, 1)
  }

  addValue() {
    let i = this.parentValue.length
    let data = {}
    data['data' + i] = ""
    this.parentValue.push(data)
  }

  save() {
    if (this.formGroup.valid) {
      // delete this.formGroup.value.master
      this.config.validation = []
      const validValue = this.validFormGroup.value
      const parentValue = this.parentFormGroup.value
      const funValue = this.funFormGroup.value
      // validation
      if (validValue.requiredInp) {
        let valid = { type: ValidationType.REQUIRED, messageMM: validValue.requireMessageMM, message: validValue.requireMessage, isAge: validValue.isdob }
        this.config.validation.push(valid)
      }
      if (validValue.minInp) {
        let valid = { type: ValidationType.MIN, messageMM: validValue.minMessageMM, message: validValue.minMessage, value: validValue.minValue, isAge: validValue.isdob }
        this.config.validation.push(valid)
      }

      if (validValue.maxInp) {
        let valid = { type: ValidationType.MAX, messageMM: validValue.maxMessageMM, message: validValue.maxMessage, value: validValue.maxValue, isAge: validValue.isdob }
        this.config.validation.push(valid)
      }
      if (this.input == 'date' && !validValue.isdob) {
        let valid = { type: ValidationType.DATE, messageMM: validValue.dateMessageMM, message: validValue.dateMessage, to: validValue.to, from: validValue.from, dateType: validValue.dateType, isAge: validValue.isdob }
        this.config.validation.push(valid)
      }
      if (this.formGroup.value.multi) {
        this.formGroup.value.multi = this.formGroup.value.multi == 'true' ? true : false
      }
      // validation

      // parent Dependency
      if (parentValue.isParent && parentValue.parentName) {
        let value: any;
        if (parentValue.isArray) {
          value = []
          this.parentValue.forEach((x, index) => {
            value.push(x['data' + index])
          })
        } else {
          value = this.parentValue[0]['data0']
        }

        this.config.dependency = {
          parentName: parentValue.parentName,
          value: value,
          isArray: parentValue.isArray,
          isRelated: parentValue.isRelated,
          relatedField: parentValue.relatedField,
          show: parentValue.show
        }
      }

      // parent Dependency

      // input Function
      if (funValue.isFun && funValue.funName) {
        this.config.isFun = true
        this.config.inpFunction = {
          funName: funValue.funName,
          type: funValue.type
        }
      } else {
        this.config.isFun = false
      }
      // 

      this.config = { ...this.config, ...this.formGroup.getRawValue(), options: this.optionData, input: this.input }
      if (this.input == InputBoxType.DIALOG) {
        this.config.options = null
        this.config.autoFields = this.optionData
      }
      this.modal.dismiss({ data: this.config, type: 'save' })
    } else {
      validateAllFields(this.formGroup)
    }
  }
  changeLabelStyle(values) {

    if (values.currentTarget.checked) {
      this.formGroup.controls.inputSize.setValidators([Validators.required, Validators.nullValidator, Validators.max(12), Validators.min(2)]);
      this.formGroup.controls.labelSize.setValidators([Validators.required, Validators.nullValidator, Validators.max(12), Validators.min(2)]);
    } else {
      this.formGroup.controls.inputSize.setValidators(null);
      this.formGroup.controls.labelSize.setValidators(null);
    }
    this.formGroup.controls.inputSize.updateValueAndValidity();
    this.formGroup.controls.labelSize.updateValueAndValidity();
  }

  setActiveTab(active: number) {
    this.activePage = active
  }

  changeDataType(event:any) {
    if (this.formGroup.value.master == 'true') {
      this.formGroup.controls.valueField.setValidators([Validators.required, Validators.nullValidator]);
      this.formGroup.controls.showField.setValidators([Validators.required, Validators.nullValidator]);
      this.formGroup.controls.masterData.setValidators([Validators.required, Validators.nullValidator]);
    } else {
      this.formGroup.controls.valueField.setValidators(null);
      this.formGroup.controls.showField.setValidators(null);
      this.formGroup.controls.masterData.setValidators(null);
    }
    this.formGroup.controls.valueField.updateValueAndValidity();
    this.formGroup.controls.showField.updateValueAndValidity();
    this.formGroup.controls.masterData.updateValueAndValidity();
  }

  getActiveTabCSSClass(tabId: number) {
    if (tabId !== this.activePage) {
      return '';
    }

    return 'active';
  }


  // helpers for View
  isControlValid(controlName: string, type?: string): boolean {
    const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string, type?: string): boolean {
    const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName, type?: string): boolean {
    const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName, type?: string): boolean {
    const control = type == 'opt' ? this.optformGroup.controls[controlName] : this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  delete(index: number) {
    let delVal = this.optionData[index].value
    if (delVal == this.formGroup.value.value) {
      this.formGroup.controls['value'].setValue("")
    }
    this.optionData.splice(index, 1)
  }

  submit() {
    this.optionData.push(this.optformGroup.value)
    this.optformGroup.reset()
  }



}
