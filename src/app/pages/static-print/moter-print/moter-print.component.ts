import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MotorPrintService } from '../../products/services/motor-print.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';

@Component({
  selector: 'app-moter-print',
  templateUrl: './moter-print.component.html',
  styleUrls: ['./moter-print.component.scss']
})
export class MoterPrintComponent implements OnInit {

  @Input() resourcesId?: string
  listData: any[] = []
  motorDetail: any = {}
  motorDriver: any = {}
  policyHolder: any = {}
  address: any = {}
  vehicleDetail: any = {}
  @Input() signId?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private motorService: MotorPrintService, private policyHolderService: PolicyHolderService, private fireRiskAddressService: FireRiskAddressService) { }

  ngOnInit() {
    this.getPolicyHolder()
    this.getDetail()
   }
  getPolicyHolder() {
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res) {
        this.policyHolder = res
        console.log("policy", this.policyHolder);
      }
    })
  }

  getDetail() {
    this.motorService.getOne(this.resourcesId).toPromise().then((res: any) => {
      if (res.motorDetail)
        this.motorDetail = res.motorDetail
      if (res.motorDriver)
        this.motorDriver = res.motorDriver
      if (res.vehicleDetail)
        this.vehicleDetail = res.vehicleDetail
    })
  }

}
