import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { Field, FUNCTION_TYPE, InputDependency } from '../field.interface';

@Component({
  selector: 'app-checkbox-box',
  templateUrl: './checkbox-box.component.html',
  styleUrls: ['./checkbox-box.component.scss']
})
export class CheckboxBoxComponent implements Field, Field, OnInit, OnDestroy {
  data = {}
  group: FormGroup;
  config: any
  unSub: Subscription[] = []
  masterOption: any[] = []
  oldValue: any = ''
  constructor(
    private globalFun: GlobalFunctionService,
    private masterData: MasterDataService,
    private cdf: ChangeDetectorRef
  ) { }




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
  
  loadData() {
    if (this.config.master == 'true') {
      if (!this.config.dependency) {
        this.getOptions()
      }
    }else{
      this.masterOption = this.config.options
      this.masterOption.forEach(element => {
        if (this.config.multi) {
          let data = this.config.value
          let oldValue = Array.isArray(data) ? data : []
          let index = (oldValue as any[]).findIndex(x => x == element.value)
          this.data['v' + element.value] = index < 0 ? false : true
        } else {
          this.data['v' + element.value] = this.config.value == element.value
        }
      });
    }
   
    
  }
  ngOnInit() {
    this.loadData()
    this.unSub[1] = this.globalFun.optionResultChange.subscribe((res) => {
      if (res) {
        this.loadData()
        // this.unSub[1].unsubscribe()
      }
    })
    // this.unSub[1] = this.group.controls[this.config.name].valueChanges.subscribe((res:any)=>{
    //   console.log(res,"Resss");

    //   console.log(res);
    //   if(res){
    //     this.loadData()
    //     this.unSub[1].unsubscribe()
    //   }
    // })
    this.listenFunData();

  }

  checkData(event) {
    let name = event.source.name
    let oldValue = this.group.value[this.config.name]
    if (this.config.multi) {
      oldValue = Array.isArray(oldValue) ? oldValue : []
      if (event.checked) {
        oldValue.push(name)
      } else {
        let i = oldValue.findIndex(x => x == name)
        oldValue.splice(i, 1)
      }
    } else {
      if (event.checked) {
        this.masterOption.forEach(x => {
          if (x.value != name) {
            this.data['v' + x.value] = false
          }
        })
        oldValue = name
      } else {
        oldValue = null
      }
    }

    this.group.controls[this.config.name].setValue(oldValue);
    this.doFunction()
  }

  get isDisabled() {
    return this.group.controls[this.config.name].disabled
  }

  getOptions() {
    let valueKey = this.config.valueField
    let showKey = this.config.showField
    this.masterData.getDataByType(this.config.masterData).toPromise().then((res: any) => {
      if (res) {
        this.masterOption = res.map(x => {
          return { 'value': x[valueKey], 'text': x[showKey], ...x }
        })
        this.masterOption.forEach(element => {
          if (this.config.multi) {
            let data = this.config.value
            let oldValue = Array.isArray(data) ? data : []
            let index = (oldValue as any[]).findIndex(x => x == element.value)
            this.data['v' + element.value] = index < 0 ? false : true
          } else {
            this.data['v' + element.value] = this.config.value == element.value
          }
        });
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
        this.masterOption.forEach(element => {
          if (this.config.multi) {
            let data = this.config.value
            let oldValue = Array.isArray(data) ? data : []
            let index = (oldValue as any[]).findIndex(x => x == element.value)
            this.data['v' + element.value] = index < 0 ? false : true
          } else {
            this.data['v' + element.value] = this.config.value == element.value
          }
        });
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

