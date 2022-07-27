import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { Field, FUNCTION_TYPE, InputDependency } from '../field.interface';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.scss']
})
export class RadioBoxComponent implements Field,OnInit, OnDestroy {
  
  group: FormGroup;
  config: any
  unSub: Subscription[] = []
  masterOption: any[] = []
  oldValue: any = ''

  constructor(
    private globalFun: GlobalFunctionService,
    private masterData: MasterDataService,
    private cdf: ChangeDetectorRef
  ) {
    
   }

  ngOnInit() {
    if (this.config.master == 'true') {
      if (!this.config.dependency) {
        this.getOptions()
      }
    }else{
      this.masterOption = this.config.options
    }
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
    if(this.config.isCurrency){
      this.globalFun.currenyValueObs.next(this.group.getRawValue()[this.config.name])
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
    this.masterData.getDataByType(this.config.masterData).toPromise().then((res: any) => {
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
    this.masterData.getDataByType(this.config.masterData).pipe(map((res: any) => {
      return res.filter(x => x[depend.relatedField] == filter)
    })).toPromise().then((res: any) => {
      if (res) {
        this.masterOption = res.map(x => {
          if(x[valueKey] == value){
            same = true
          }
          return { 'value': x[valueKey], 'text': x[showKey], ...x }
        })
        if(same){
          this.group.controls[this.config.name].setValue(value)
        }else{
          if(this.masterOption.length > 0){
            this.group.controls[this.config.name].setValue(this.masterOption[0]['value'])
          }
        }
        this.cdf.detectChanges()
        this.doFunction()
      }
    })
  }


}

