import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { environment } from 'src/environments/environment';
import { FANService } from '../../fna-manage.service';
import { FANProductService } from './product-manage.service';

@Component({
  selector: 'app-product-analysis',
  templateUrl: './product-analysis.component.html',
  styleUrls: ['./product-analysis.component.scss']
})
export class ProductAnalysisComponent implements OnInit {
  @Input() product: any = null;
  @Input() fnaId: any = null;
  @Input() customerId: any = null;
  @Output() changeProduct: EventEmitter<string> = new EventEmitter<string>();
  productSwitch: string = 'product';
  Default_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader`;
  fnaProducts = [];
  products = [];
  constructor(private fnaService: FANService, private fnaProductService: FANProductService, private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.fnaService.fnaProduct) {
      this.fnaProducts = this.fnaService.fnaProduct;
      for (var i = 0; i < this.fnaProducts.length; i++) {
        if (this.fnaProducts[i].icon) {
          this.fnaProducts[i].productImage = this.Default_DOWNLOAD_URL + '/' + this.fnaProducts[i].icon
        }
      }
    }

    if (this.fnaService.fnaUpdateProducts) {
      this.products = this.fnaService.fnaUpdateProducts;
    }
  }

  previous(type) {
    this.changeProduct.emit(type);
  }

  async saveProduct(type) {
    this.productSwitch = type;
    this.products = this.removeDuplicates(this.products);
    this.fnaService.fnaUpdateProducts.concat(this.products);
  
    let reqBody = {
      customerId: this.customerId,
      fnaType: "LPP",
      grandDiscount: 0,
      highDiscount: 0,
      id: this.fnaId,
      products: this.products
    }

    await this.fnaService.updateFNAProduct(reqBody).toPromise().then((res: any) => {
      if (res) {
        this.alertService.activate('This record was updated', 'Success Message').then(result => {
          this.previous('aboutLLP');
        });
      }
    });
  }

  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }

  display() {

  }

}
