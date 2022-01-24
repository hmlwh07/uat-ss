import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { Field, FUNCTION_TYPE } from '../field.interface';
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
  constructor(
    private globalFun: GlobalFunctionService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.listenFunData();
  }



  ngOnDestroy() {
    this.unSub.forEach((sb) => sb.unsubscribe());
  }

  doFunction() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.TRIGGER) {
        this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name],this.group.getRawValue())
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

    if (this.editStage) return false
    let modalRef;
    if (this.isNrc) {
      modalRef = this.modalService.open(NrcPopupPage, { size: 'xl', backdrop: false });
    } else {
      modalRef = this.modalService.open(CustomDialogComponent, { size: 'xl', backdrop: false });
    }
    modalRef.componentInstance.config = this.config
    modalRef.componentInstance.group = this.group
    modalRef.result.then(() => { }, (res) => {
      if (res == 'save') {
        this.doFunction()
      }
    })
  }
}

