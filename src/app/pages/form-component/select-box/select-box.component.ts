import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { Field, FUNCTION_TYPE, InputDependency } from '../field.interface';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements Field, OnInit, OnDestroy {
  group: FormGroup;
  config: any = {}
  masterOption: any[] = []
  unSub: Subscription[] = []
  oldValue: any = ''
  constructor(private masterData: MasterDataService, private cdf: ChangeDetectorRef, private globalFun: GlobalFunctionService) { }

  ngOnInit() {
    
    if (this.config.master == 'true') {
      if (!this.config.dependency) {
        this.getOptions()
      }
    }
    this.listenFunData()
  }



  ngOnDestroy() {
    this.unSub.forEach((sb) => sb.unsubscribe());
  }

  doFunction() {
    if (this.config.isFun) {
      if (this.config.inpFunction.type == FUNCTION_TYPE.TRIGGER) {
        if (this.config.inpFunction.funName == 'paPolicyValidation') return false
        this.globalFun[this.config.inpFunction.funName](this.group.getRawValue()[this.config.name], this.group.getRawValue(), this.masterOption)
      }
    }
    if (this.config.policyterm) {
      let value = this.group.getRawValue()[this.config.name] || this.config.value
      this.globalFun.paPolicyValidation(value, this.masterOption)
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

  getOptions() {
    let valueKey = this.config.valueField
    let showKey = this.config.showField
    let address = this.config.type == "address" ? true : false
    this.masterData.getDataByType(this.config.masterData, address).toPromise().then((res: any) => {
      if (res) {
        this.masterOption = res.map(x => {
          return { 'value': x[valueKey], 'text': x[showKey], ...x }
        })
        this.cdf.detectChanges()
        this.doFunction()
      }
    })
  }

  reGetOption(filter: any) {
    if (filter == this.oldValue) return false
    let depend: InputDependency = this.config.dependency
    let valueKey = this.config.valueField
    let showKey = this.config.showField
    let value = this.group.getRawValue()[this.config.name] || this.config.value
    let same = false
    this.oldValue = filter
    let address = this.config.type == "address" ? true : false
    this.masterData.getDataByType(this.config.masterData, address).pipe(map((res: any) => {
      return res.filter(x => x[depend.relatedField] == filter)
    })).toPromise().then((res: any) => {
      if (res) {
        this.masterOption = res.map(x => {
          if (x[valueKey] == value) {
            same = true
          }
          return { 'value': x[valueKey], 'text': x[showKey], ...x }
        })
        if (same) {
          this.group.controls[this.config.name].setValue(value)
        } else {
          if (this.masterOption.length > 0) {
            this.group.controls[this.config.name].setValue(this.masterOption[0]['value'])
          }
        }
        this.cdf.detectChanges()
        this.doFunction()
      }
    })
  }

}
