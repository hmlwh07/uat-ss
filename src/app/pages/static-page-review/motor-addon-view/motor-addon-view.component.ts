import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateAdapter } from 'angular-calendar';
import { GlobalFunctionService } from 'src/app/core/global-fun.service';
import { IsJsonString, MY_FORMATS } from 'src/app/core/is-json';
import { Product, ProductPages } from '../../products/models/product.dto';
import { ProductDataService } from '../../products/services/products-data.service';
@Component({
  selector: 'app-motor-addon-view',
  templateUrl: './motor-addon-view.component.html',
  styleUrls: ['./motor-addon-view.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MotorAddonViewComponent implements OnInit {
  @Input() product: Product
  primary = 'primary'
  isMedical: boolean = false
  isCross: boolean = false
  planOption: any = 'basic';
  planOptionOption: any = [
    {
      code: 'basic', value: 'Basic Plan'
    },
    {
      code: 'special', value: 'Special Plan'
    },
  ]
  premium: any
  startDate: any
  endDate: any
  option1: string = "Digital Source Place"
  option2: string = "Digital Destination Place"
  parentData: any = {}
  addOnsData: any = {}
  constructor(private globalFun: GlobalFunctionService, private prodService: ProductDataService) {
  }

  ngOnInit() {
  
  }

  toggleChange(type) {
    if (type == 'medical') {
      this.isMedical = this.isMedical
      this.changePlan()
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
      // console.log(this.premium);

    }
    if (type == 'cross') {
      this.isCross = this.isCross
  
    }
  }
  changePlan() {
    if (this.planOption == 'basic') {
      // this.premium = this.globalFun.motorMedicalExpense(this.parentData)
    } else {
      // this.premium =  this.globalFun.motorMedicalExpense(this.parentData)
    }
  }

}
