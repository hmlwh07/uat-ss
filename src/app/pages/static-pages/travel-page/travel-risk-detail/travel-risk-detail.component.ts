import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PageUI, Product } from '../../../products/models/product.dto';

@Component({
  selector: 'app-travel-risk-detail',
  templateUrl: './travel-risk-detail.component.html',
  styleUrls: ['./travel-risk-detail.component.scss']
})
export class TravelRiskDetailComponent implements OnInit {
  @Input() list: any[] = []
  @Input() product: Product
  @Input() editData: any = {}
  @Input() resourcesId?: string
  @Input() premiumAmt: string
  tempData = {}
  tableReform:any[] = []
  constructor() { }
  ngOnInit(): void {

  }

  calPremimun() {

  }

  newData(index?, item?) {

  }
  deleteData(index, item) {

  }

  download(col, item) {

  }

  saveTemp(event) {

  }
  getOtherData(col,item){

  }


}
