import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { GlobalFunctionService } from '../../../core/global-fun.service';
import { FireRiskService } from '../fire-risk/models&services/fire-risk.service';
import { FirePageID } from '../static-pages.data';
import { AddCalculatedBuildingComponent } from './add-calculated-building/add-calculated-building.component';
import { FireContentService, FirePLantService, FireStockService } from './services/calculated-building-service';

@Component({
  selector: 'app-calculated-building',
  templateUrl: './calculated-building.component.html',
  styleUrls: ['./calculated-building.component.scss']
})
export class CalculatedBuildingComponent implements OnInit {
  isContents: boolean = false
  isPlant: boolean = false
  isStock: boolean = false
  @Input() default: number = 0
  primary = 'primary'
  totalContent: number = 0
  totalPlant: number = 0
  totalStock: number = 0
  tableData: any = []
  contentsData: any = []
  plantData: any = []
  stockData: any = []
  totalSI: number = 0
  productDetail: any = {}
  @Input() riskId = 1
  @Output() totalEvent = new EventEmitter<number>()
  constructor(private FireContentService: FireContentService,
    private FirePLantService: FirePLantService, private FireStockService: FireStockService,
    private modal: NgbModal, private auth: AuthService, private cdf: ChangeDetectorRef,
    private globalService: GlobalFunctionService, private riskService: FireRiskService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.getFireContent()
    this.getFirePlant()
    this.getFireStock()
    this.productDetail = this.globalService.tempFormData[FirePageID] || {}
  }
  actionBtn(event) {
    console.log(event)
    if (event.cmd == "delete") {
      if (event.tbtype == "content") {
        this.deleteFireContent(event.data.id)
      }
      if (event.tbtype == "plant") {
        this.deleteFirePlant(event.data.id)
      }
      if (event.tbtype == "stock") {
        this.deleteFireStock(event.data.id)
      }
    }
    if (event.cmd == "edit") {
      if (event.tbtype == "content") {
        this.add('contents', event.data, "Edit")
      }
      if (event.tbtype == "plant") {
        this.add('plants', event.data, "Edit")
      }
      if (event.tbtype == "stock") {
        this.add('stock', event.data, "Edit")
      }
    }

  }
  add(type, data?, pageType?) {
    if (type == "contents") {
      let modalRef;
      modalRef = this.modal.open(AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = "Contents including FFF"
      modalRef.componentInstance.pageType = pageType
      modalRef.componentInstance.riskId = this.riskId
      modalRef.componentInstance.data = data
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          console.log("RESSSS", res)
          if (res.type == "save") {
            let postData = { ...res.data, createdBy: this.auth.currentUserValue.id }
            console.log("postData", postData)
            this.FireContentService.save(postData).toPromise().then((res: any) => {
              if (res) {
                console.log("getFireContent-RESSS", res)
                this.getFireContent()
                this.contentsData.push({ ...postData, id: res })
                this.cdf.detectChanges()
              }
            })
          }
        }
      })
    }
    if (type == "plants") {
      let modalRef;
      modalRef = this.modal.open(AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = "Plant and Machinery"
      modalRef.componentInstance.pageType = pageType
      modalRef.componentInstance.riskId = this.riskId
      modalRef.componentInstance.data = data
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          console.log("RESSSS", res)
          if (res.type == "save") {
            let postData = { ...res.data, createdBy: this.auth.currentUserValue.id }
            console.log("postData", postData)
            this.FirePLantService.save(postData).toPromise().then((res: any) => {
              if (res) {
                console.log("getFirePlant-RESSS", res)
                this.getFirePlant()
                this.plantData.push({ ...postData, id: res })
                this.cdf.detectChanges()
              }
            })
          }
        }
      })
    }
    if (type == "stock") {
      let modalRef;
      modalRef = this.modal.open(AddCalculatedBuildingComponent, { size: 'xl', backdrop: false });
      modalRef.componentInstance.type = "Stock"
      modalRef.componentInstance.pageType = pageType
      modalRef.componentInstance.riskId = this.riskId
      modalRef.componentInstance.data = data
      modalRef.componentInstance.isStock = true
      modalRef.result.then(() => { }, (res) => {
        if (res) {
          console.log("RESSSS", res)
          if (res.type == "save") {
            let postData = { ...res.data, createdBy: this.auth.currentUserValue.id, description: res.data.itemDescription }
            console.log("postData", postData)
            this.FireStockService.save(postData).toPromise().then((res: any) => {
              if (res) {
                console.log("getFirePlant-RESSS", res)
                this.getFireStock()
                this.stockData.push({ ...postData, id: res })
                this.cdf.detectChanges()
              }
            })
          }
        }
      })
    }
  }

  getFireContent() {
    this.riskService.getContent(this.riskId).toPromise().then((res: any) => {
      console.log("getFireContent-RESSS", res)
      if (res) {
        this.contentsData = res

        if (this.contentsData.length > 0) {
          this.isContents = true
          this.totalContent = 0
          for (let data of this.contentsData) {
            console.log("TSET", this.totalContent);

            this.totalContent += parseInt(data.totalValue)
          }
        }
        this.calculateProposeStock()
        this.cdf.detectChanges()
      }
    })
  }
  getFirePlant() {
    this.riskService.getPlant(this.riskId).toPromise().then((res: any) => {
      if (res) {
        console.log("getFirePlant-RESSS", res)
        this.plantData = res
        if (this.plantData.length > 0) {
          this.isPlant = true
          this.totalPlant = 0
          for (let data of this.plantData) {
            this.totalPlant += parseInt(data.totalValue)

          }
        }
        this.calculateProposeStock()
        this.cdf.detectChanges()
      }
    })

  }
  getFireStock() {
    this.riskService.getStock(this.riskId).toPromise().then((res: any) => {
      if (res) {
        console.log("getFireStock-RESSS", res)
        this.stockData = res
        if (this.stockData.length > 0) {
          this.isStock = true
          this.totalStock = 0
          for (let data of this.stockData) {
            this.totalStock += parseInt(data.stockValue)
          }
          this.calculateProposeStock()
        }
        this.cdf.detectChanges()
      }
    })

  }
  calculateProposeStock() {
    this.totalSI = (this.totalStock + this.totalContent + this.totalPlant)
    this.totalEvent.next(this.totalSI)
  }

  deleteFireContent(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.FireContentService.delete(id).toPromise().then((res: any) => {
          if (res) {
            this.getFireContent()
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
            });
          }
        })
      }
    });
  }
  deleteFirePlant(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      this.FirePLantService.delete(id).toPromise().then((res: any) => {
        if (res) {
          this.getFirePlant()
          this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
          });
        }
      });
    });
  }
  deleteFireStock(id) {
    this.alertService.activate('Are you sure want to delete?', 'Warning Message').then(result => {
      this.FireStockService.delete(id).toPromise().then((res: any) => {
        if (res) {
          this.getFireStock()
          this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
          });
        }
      })
    });
  }
  toggleChange(type) {
    if (type == 'contents') {
      this.isContents = this.isContents
      if (!this.isContents && this.contentsData.lenght > 0) {
        for (let data of this.contentsData) {
          this.deleteFireContent(data.id)
        }
      }
    }
    if (type == 'plants') {
      this.isPlant = this.isPlant
      if (!this.isPlant && this.plantData.lenght > 0) {
        for (let data of this.plantData) {
          this.deleteFirePlant(data.id)
        }
      }
    }
    if (type == 'stock') {
      this.isStock = this.isStock
      if (!this.isStock && this.stockData.lenght > 0) {
        for (let data of this.stockData) {
          this.deleteFireStock(data.id)
        }
      }
    }
  }
}
