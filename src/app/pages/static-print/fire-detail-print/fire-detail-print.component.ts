import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.dto';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';

@Component({
  selector: 'app-fire-detail-print',
  templateUrl: './fire-detail-print.component.html',
  styleUrls: ['./fire-detail-print.component.scss']
})
export class FireDetailPrintComponent implements OnInit {
  @Input() resourcesId?: string
  detail: any = {}
  constructor(private fireService: FireProductService) { }

  ngOnInit() {
    this.getDetail()
  }

  getDetail() {
    this.fireService.getOne(this.resourcesId).toPromise().then(res => {
      if (res)
        this.detail = res
    })
  }

}
