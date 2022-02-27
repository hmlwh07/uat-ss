import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../_metronic/core/services/products.service';
import { CoverageModalComponent } from './coverage-modal/coverage-modal.component';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { v4 } from 'uuid';
import { Router } from '@angular/router';
import { ProductDataService } from './services/products-data.service';
import { Product } from './models/product.dto';
import * as moment from 'moment'
import { ProductCol, ProductDisplayCol } from './products-table.const';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { Customer } from '../customer-detail/custmer.dto';
import { defaultAccessObj, MenuDataService } from '../../core/menu-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  type: string = 'page'
  products: Product[] = []
  ELEMENT_COL = JSON.parse(JSON.stringify(ProductCol))
  displayedColumns = JSON.parse(JSON.stringify(ProductDisplayCol))
  // selected: number = -1
  unsubscribe: Subscription[] = []
  show: boolean = false
  prodAccess = defaultAccessObj

  constructor(private modalService: NgbModal, private itemService: ProductDataService, private router: Router, private cdRef: ChangeDetectorRef, private menuService: MenuDataService) { }

  ngOnInit(): void {
    if (this.type != 'page') {
      this.ELEMENT_COL.splice(8, 1)
      this.displayedColumns.splice(8, 1)
    } 
    // else {
    //   this.checkPremission()
    // }
    this.show = true
    this.getProducts()
    // const itemScb = this.itemService.items$.subscribe(data => {
    //   this.products = data.products
    // })
    // this.unsubscribe.push(itemScb);
  }
  checkPremission() {
    this.menuService.dataAccess.subscribe((res) => {
      if (res) {
        this.prodAccess = res['product_definition']
        if (this.prodAccess.edit) {
          this.ELEMENT_COL[8].btn.edit = false
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  editLayout(prod: Product) {
    this.itemService.findOne(prod.id).toPromise().then((res) => {
      if (res) {
        this.itemService.createingProd = res
        this.itemService.type = prod.application ? 'application' : 'quotation'
        this.router.navigateByUrl("/product-form")
      }
    })
  }

  get selected() {
    let prod
    if (this.matTable) {
      prod = this.matTable.selection.selected[0]
    }
    return prod ? prod : { id: 0 }
  }


  createOrEdit(data?, id?: string) {
    const modalRef = this.modalService.open(ProductsModalComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.prodId = id
    modalRef.componentInstance.oldData = data || {}
    modalRef.result.then(() => { }, (res) => {
      if (res) {
        if (res.type == 'save') {
          this.getProducts()
          this.cdRef.detectChanges();
        }
      }
    })
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  nextProd() {
    if (this.selected.id) {
      this.itemService.findOne(this.selected.id).toPromise().then((res) => {
        // console.log(res);

        if (res) {
          this.modalService.dismissAll({ data: res, type: "save" })
        }
      })
    }
  }

  getProducts() {
    this.itemService.getAll().toPromise().then((res: any) => {
      //console.log(res);
      if (res) {
        this.products = res
        this.cdRef.detectChanges()
        this.matTable.reChangeData()
      }
    })
  }

  viewDetail(item: any) {
    this.itemService.selectedProd = item
    // this.itemService.type = 'quotation'
    this.itemService.viewType = 'view'
    this.router.navigateByUrl("/product/products-config/detail")
  }

  getFreq(data: string) {
    let val = ""
    let ary = data.split(", ")
    for (const item of ary) {
      if (item == "lump") {
        val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum"
      } else if (item == "annually") {
        val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually"
      }
    }

    return val
  }

  actionBtn(event) {
    if (event.cmd == 'edit') {
      this.viewDetail(event.data)
    } else if (event.cmd == 'view') {
      this.editLayout(event.data)
    }
  }

}
