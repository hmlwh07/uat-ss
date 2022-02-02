import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FireContentService, FirePLantService, FireStockService } from '../../static-pages/calculated-building/services/calculated-building-service';

@Component({
  selector: 'app-calculated-building',
  templateUrl: './calculated-building.component.html',
  styleUrls: ['./calculated-building.component.scss']
})
export class CalculatedBuildingComponent implements OnInit {
  @Input() riskId: number = 1
  contents: boolean = true
  plant: boolean = true
  stock: boolean = true
  contentData: any = []
  plantData: any = []
  stockData: any = []
  totalContent: number = 0
  totalPlant: number = 0
  totalStock: number = 0
  constructor(private FireContentService: FireContentService, private FirePLantService: FirePLantService, private FireStockService: FireStockService, private cdf: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getFireContent()
    this.getFirePlant()
    this.getFireStock()
  }
  onActionView(data, type) {

    if (type == "content") {
      this.deleteFireContent(data.id)
    }
    if (type == "plant") {
      this.deleteFirePlant(data.id)
    }
    if (type == "stock") {
      this.deleteFireStock(data.id)

    }

  }


  getFireContent() {
    this.FireContentService.findAll().toPromise().then((res: any) => {
      console.log("getFireContent-RESSS", res)
      if (res) {
        this.contentData = res

        if (this.contentData.length > 0) {
          for (let data of this.contentData) {

            this.totalContent += data.totalValue
          }
        }

        this.cdf.detectChanges()
      }
    })
  }
  getFirePlant() {
    this.FirePLantService.findAll().toPromise().then((res: any) => {
      if (res) {
        console.log("getFirePlant-RESSS", res)
        this.plantData = res
        if (this.plantData.length > 0) {
          for (let data of this.plantData) {
            this.totalPlant += data.totalValue
          }
        }

        this.cdf.detectChanges()
      }
    })

  }
  getFireStock() {
    this.FireStockService.findAll().toPromise().then((res: any) => {
      if (res) {
        console.log("getFireStock-RESSS", res)
        this.stockData = res
        if (this.stockData.length > 0) {
          for (let data of this.stockData) {
            this.totalStock += data.stockValue
          }

        }
        this.cdf.detectChanges()
      }
    })

  }


  deleteFireContent(id) {
    this.FireContentService.delete(id).toPromise().then((res: any) => {
      if (res) {
        this.getFireContent()
      }
    })
  }
  deleteFirePlant(id) {
    this.FirePLantService.delete(id).toPromise().then((res: any) => {
      if (res) {
        this.getFirePlant()
      }
    })
  }
  deleteFireStock(id) {
    this.FireStockService.delete(id).toPromise().then((res: any) => {
      if (res) {
        this.getFireStock()
      }
    })
  }


}
