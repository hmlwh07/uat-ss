import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { MasterDataService } from '../../../modules/master-data/master-data.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
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
  state: any[]
  township: any[]
  district: any[]
  districtCode: any
  stateCode: any
  districtValue: any
  stateValue: any
  constructor(private masterData: MasterDataService, private policyHolderService: PolicyHolderService, private cdf: ChangeDetectorRef, private globalFun: GlobalFunctionService) {
  
  }

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

  // getAddressData(filter) {
  //   this.masterData.getDataByType("PT_TOWNSHIP", true).toPromise().then((res: any) => {
  //     if (res) {
  //       this.township = res
  //       let district = this.township.find(x => x.codeId == filter)
  //       this.districtCode = district.parentCode
  //       this.getMasterValueDistrict(this.districtCode).toPromise().then((res) => {
  //         console.log('PT_DISTRICT', res);
  //         if (res['PT_DISTRICT']) {
  //           this.districtValue = res['PT_DISTRICT']
  //           this.group.controls['f_district'].setValue(this.districtValue)
  //         }
  //       })

  //       if (this.districtCode) {
  //         this.masterData.getDataByType("PT_DISTRICT", true).toPromise().then((res: any) => {
  //           if (res) {
  //             this.district = res
  //             let state = this.district.find(x => x.codeId == this.districtCode)
  //             this.stateCode = state.parentCode
  //             this.getMasterValueState(this.stateCode).toPromise().then((res) => {
  //               if (res['PT_STATE']) {
  //                 this.stateValue = res['PT_STATE']
  //                 this.group.controls['f_state'].setValue(this.stateValue)
  //               }
  //             })

  //           }
  //         })
  //       }
  //     }
  //   })
  // }
  // getMasterValueDistrict(districtCd) {

  //   let data = {
  //     "codeBookRequest": [

  //       {
  //         "codeId": districtCd,
  //         "codeType": "PT_DISTRICT",
  //         "langCd": "EN"
  //       },
  //     ]
  //   }
  //   return this.policyHolderService.getMasterDataSale(data)
  // }
  // getMasterValueState(stateCd) {
  //   let data = {
  //     "codeBookRequest": [

  //       {
  //         "codeId": stateCd,
  //         "codeType": "PT_STATE",
  //         "langCd": "EN"
  //       },
  //     ]
  //   }
  //   return this.policyHolderService.getMasterDataSale(data)
  // }




  reGetOption(filter: any) {
    if (filter == this.oldValue) return false
    let depend: InputDependency = this.config.dependency
    let valueKey = this.config.valueField
    let showKey = this.config.showField
    let value = this.group.getRawValue()[this.config.name] || this.config.value
    let same = false
    this.oldValue = filter
    let address = this.config.type == "address" ? true : false
    console.log(address, this.config.masterData);

    this.masterData.getDataByType(this.config.masterData, address).pipe(map(async (res: any) => {
      let respond = res
      // .filter(x => x[depend.relatedField] == filter)
      if (this.config.masterData == 'PT_DISTRICT') {
        this.masterData.getDataByType("PT_TOWNSHIP", true).toPromise().then(async (res: any) => {
          if (res) {
            this.township = res
            let district = this.township.find(x => x.codeId == filter)
            this.districtCode = district.parentCode
            this.masterData.getDataByType("PT_DISTRICT", true).toPromise().then(async (res: any) => {
              if (res) {
                this.district = res
                respond = this.district.filter(x => x.codeId == this.districtCode)
                this.masterOption = respond.map(x => {
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
        })
      }
      if (this.config.masterData == 'PT_STATE') {
            this.masterData.getDataByType("PT_DISTRICT", true).toPromise().then(async (res: any) => {
              if (res) {
                this.district = res
                respond = this.district.find(x => x.codeId == filter)
                this.stateCode = respond.parentCode
                this.masterData.getDataByType("PT_STATE", true).toPromise().then(async (res: any) => {
                  if (res) {
                    this.state = res
                    respond = this.state.filter(x => x.codeId == this.stateCode)
                    this.masterOption = respond.map(x => {
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
            })
      }
      else {
        return respond.filter(x => x[depend.relatedField] == filter)
      }
    })).toPromise().then(async (res: any) => {
      if (res) {
        this.masterOption = res.map(x => {
          if (x[valueKey] == value) {
            same = true
          }
          return { 'value': x[valueKey], 'text': x[showKey], ...x }
        })
        console.log(this.masterOption);

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
