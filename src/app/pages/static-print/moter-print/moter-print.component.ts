import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
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
  detail: any = {}
  policyHolder:any={}
  address:any={}
  @Input() signId?: string
  DEFAULT_DOWNLOAD_URL = `${environment.apiUrl}/attachment-downloader/`;
  constructor(private fireService: FireProductService,private fireRsikService: FireRiskService,private policyHolderService:PolicyHolderService,private fireRiskAddressService:FireRiskAddressService) { }

  ngOnInit() {
    this.getPolicyHolder()
    this.getDetail()
    this.getRiskDetail()
    this.getRiskAddress()
  }

  getDetail() {
    this.fireService.getOne(this.resourcesId).toPromise().then(res => {
      if (res)
      this.detail = res
      console.log("DEtail",this.detail);
    })
  }
  getRiskDetail(){
    this.fireRsikService.getMany(this.resourcesId).toPromise().then((res:any)=>{
      if(res){
        this.listData = res
        console.log("riskDetail",this.listData);
      }
    })
  }
  getPolicyHolder(){
    this.policyHolderService.getOne(this.resourcesId).toPromise().then((res:any)=>{
      if(res){
        this.policyHolder=res
        console.log("policy",this.policyHolder);
      }
    })
  }

  getRiskAddress(){
    this.fireRiskAddressService.getOne(this.resourcesId).toPromise().then((res:any)=>{
      if(res){
        this.address=res
        console.log("adderss",this.address);
      }
    })
  }

}
