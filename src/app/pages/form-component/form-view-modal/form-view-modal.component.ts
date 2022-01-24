import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from '../dynamic-form.component';


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
  oldData: any = {}
  stage: boolean = false
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    // this.dynForm.reCreateFrom()
  }
  ngOnDestroy(){

  }

  save(){
    let submited = this.dynForm.handleSubmit()
      if(!submited) return false
  }  

  saveTemp(data){
    this.modal.dismiss({ data: data, type: 'save' })
  }

}
