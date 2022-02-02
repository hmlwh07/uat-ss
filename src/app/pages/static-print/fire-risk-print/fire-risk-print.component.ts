import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';

@Component({
  selector: 'app-fire-risk-print',
  templateUrl: './fire-risk-print.component.html',
  styleUrls: ['./fire-risk-print.component.scss']
})
export class FireRiskPrintComponent implements OnInit {
  @Input() resourcesId?: string
  listData: any[] = []
  constructor(private fireRsikService: FireRiskService){}
  ngOnInit(): void {
    this.getDetail()
  }

  getDetail(){
    this.fireRsikService.getMany(this.resourcesId).toPromise().then((res:any)=>{
      if(res){
        this.listData = res
      }
    })
  }
}
