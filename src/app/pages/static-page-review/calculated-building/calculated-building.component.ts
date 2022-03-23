import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
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
  constructor(private FireContentService: FireContentService,
    private FirePLantService: FirePLantService, private FireStockService: FireStockService,
    private cdf: ChangeDetectorRef, private alertService: AlertService) {

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
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
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
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.FirePLantService.delete(id).toPromise().then((res: any) => {
          if (res) {
            this.getFirePlant()
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
            });
          }
        })
      }
    });
  }

  deleteFireStock(id) {
    this.alertService.activate('Are you sure you want to delete?', 'Warning Message').then(result => {
      if (result) {
        this.FireStockService.delete(id).toPromise().then((res: any) => {
          if (res) {
            this.getFireStock()
            this.alertService.activate('This record was deleted', 'Success Message').then(result => {
           
            });
          }
        })
      }
    });
  }


}
