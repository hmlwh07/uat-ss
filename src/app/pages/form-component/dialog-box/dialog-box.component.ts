import { AfterContentChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { CustomerDetailComponent } from '../../customer-detail/customer-detail.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { ConfigInput, Field, FUNCTION_TYPE } from '../field.interface';
import { NrcPopupPage } from '../nrc-popup/nrc-popup.page';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements Field, OnInit, OnDestroy {

  group: FormGroup;
  config: any
  unSub: Subscription[] = []
  editStage: boolean
  isNrc: boolean = false
  @Input() internalConfig: ConfigInput[] = []
  constructor(
    private globalFun: GlobalFunctionService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.listenFunData();
    // this.group.controls[this.config.name].disabled
  }



  ngOnDestroy() {
    this.unSub.forEach((sb) => sb.unsubscribe());
  }

  doFunction() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.TRIGGER) {
        this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue())
      }
    }
  }

  listenFunData() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.GETDATA) {
        this.unSub[0] = this.globalFun[this.config.inpFunction.funName + "Result"].subscribe((res) => {
          this.group.controls[this.config.name].setValue(res)
        })
      }
    }
  }

  openModal() {
    //console.log(this.editStage);

    if (this.editStage || this.config.disabled) return false
    let modalRef;
    if (this.isNrc) {
      modalRef = this.modalService.open(NrcPopupPage, { size: 'xl', backdrop: false });
    } else {
      modalRef = this.modalService.open(CustomDialogComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.customForm = true
    }
    modalRef.componentInstance.config = this.config
    modalRef.componentInstance.group = this.group
    modalRef.componentInstance.internalConfig = this.internalConfig

    modalRef.result.then(() => { }, (res) => {
      if (res == 'save') {
        this.doFunction()
      }
    })
  }

  onCreate() {
    let modalRef;
    modalRef = this.modalService.open(CustomerDetailComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.isPopup = true
    modalRef.componentInstance.pageStatus = 'create'
    modalRef.componentInstance.isLead = true
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == "save") {
          let customer = res.data
          this.doDataBind(customer)
        }
      }
    })
  }
  doDataBind(customer) {
    this.group.controls[this.config.name].setValue(customer[this.config.valueField])
    for (let afield of this.config.autoFields) {
      const formControl = this.group.get(afield.value);
      let input = this.internalConfig.find(x => x.name == afield.value)
      // console.log(input,afield,this.internalConfig);
      if (formControl) {
        if (input) {
          let value = input.input == 'date' ? moment(customer[afield.field]) : customer[afield.field]
          formControl.setValue(value)
        } else
          formControl.setValue(customer[afield.field])
      }
    }
  }

}

