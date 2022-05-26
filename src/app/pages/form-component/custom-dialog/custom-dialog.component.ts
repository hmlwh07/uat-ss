import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { of, Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { AlertService } from '../../../modules/loading-toast/alert-model/alert.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { BtnConfig, ConfigInput } from '../field.interface';


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
})
export class CustomDialogComponent implements OnInit, OnDestroy {
  @Input() group: FormGroup;
  @Input() config: ConfigInput
  @Input() internalConfig: ConfigInput[] = []
  @Input() customForm;
  selectedData: any
  private subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder, public modal: NgbActiveModal,
    private prodService: ProductDataService,
    private globalService: GlobalFunctionService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    console.log(this.config, this.internalConfig);
  }

  ngOnDestroy(): void {

  }

  save() {
    if (this.selectedData) {
      // console.log(this.selectedData[this.config.valueField]);
      // console.log(this.config,this.selectedData);
      let prod = this.prodService.createingProd
      let checkArray = this.globalService.getParnet(prod, this.prodService.viewType, "drivers_page") || []
      if (this.selectedData[this.config.valueField]) {
        if (checkArray.length > 0) {
          let checkData = checkArray.find(data => data[this.config.valueField] == this.selectedData[this.config.valueField])
          if (checkData) {
            this.alertService.activate('This Driver is already exist!', 'Warning Message');
          } else {
            this.doDataBind()
          }
        } else {
          this.doDataBind()

        }
      }
    }
    this.modal.dismiss()
  }

  selectedUser(event) {
    // console.log(event);
    this.selectedData = event
    // this.modal.close( this.selectedData)
  }

  doDataBind() {
    this.group.controls[this.config.name].setValue(this.selectedData[this.config.valueField])
    for (let afield of this.config.autoFields) {
      const formControl = this.group.get(afield.value);
      let input = this.internalConfig.find(x => x.name == afield.value)
      // console.log(input,afield,this.internalConfig);

      if (formControl) {
        if (input) {

          let value = input.input == 'date' ? moment(this.selectedData[afield.field]) : this.selectedData[afield.field]
          formControl.setValue(value)
        } else
          formControl.setValue(this.selectedData[afield.field])
      }
    }
  }


}
