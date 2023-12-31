import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { DynamicFormComponent } from '../dynamic-form.component';
import { FromGroupData } from '../field.interface';


@Component({
  selector: 'app-form-view-modal',
  templateUrl: './form-view-modal.component.html',
  styleUrls: ['./form-view-modal.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class FormViewModalComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynForm: DynamicFormComponent
  pageName: string
  controls: any[]
  benefiArray?: any[] = []
  oldData: any = {}
  activateForm: FromGroupData
  stage: boolean = false
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal,
    private globalFun: GlobalFunctionService
  ) { }

  ngOnInit(): void {
    // this.dynForm.reCreateFrom()
  }
  ngOnDestroy() {

  }

  save() {
    let submited = this.dynForm.handleSubmit()
    if (!submited) return false
  }

  async saveTemp(data) {
    let page = this.activateForm
    // console.log(this.oldData);

    if (page.function) {
      let currentData = { ...data, refId: this.oldData.refId || 0, }
      // console.log(this.benefiArray);
      let optionArry = this.benefiArray.length > 0 ? this.benefiArray : this.globalFun.tempFormData[page.tableName + page.id]
      let fun = await this.globalFun[page.function]("", currentData, optionArry, true);
      if (fun)
        this.modal.dismiss({ data: data, type: 'save' })
    } else {
      this.modal.dismiss({ data: data, type: 'save' })
    }
  }

}
