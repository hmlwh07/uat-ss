import { Component, Input, OnInit } from '@angular/core';
import { AddOnQuoService } from '../../products/services/add-on-quo.service';
import { ProductDataService } from '../../products/services/products-data.service';
import { FireRiskService } from '../../static-pages/fire-risk/models&services/fire-risk.service';
import { PolicyHolderService } from '../../static-pages/fire-simple-page/models&services/fire-policy';
import { FireProductService } from '../../static-pages/fire-simple-page/models&services/fire-product.service';
import { FireRiskAddressService } from '../../static-pages/fire-simple-page/models&services/fire-risk-address';

@Component({
  selector: 'app-fire-print',
  templateUrl: './fire-print.component.html',
  styleUrls: ['./fire-print.component.scss'],
})
export class FirePrintComponent implements OnInit {

  @Input() resourcesId?: string
  listData: any[] = []
  detail: any = {}
  policyHolder:any={
    partyAddress:[]
  }
  address:any={}
  additionalcoverinfo:any={}
  optionId:any
  product:any
  addOnData:any=[]
  addon:any
  additionalData:any=[]
  totalPremium:number=0
  totalSi:number=0
constructor(private fireService: FireProductService,private fireRsikService: FireRiskService,private policyHolderService:PolicyHolderService,private fireRiskAddressService:FireRiskAddressService,private addonQuo:AddOnQuoService,private productSerice:ProductDataService) { }

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
        for(let data of this.listData){
          this.totalPremium+=parseInt(data.premium)
          this.totalSi+=parseInt(data.riskSi)
        }
        console.log(this.totalPremium,this.totalSi);
        
        this.getAddonCover()

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

  async getAddonCover(){
    this.product = this.productSerice.createingProd || this.productSerice.selectedProd
    console.log(this.product,this.listData);
    
    for(let riskID of this.listData){
      let obj = {
        description:riskID.buildingDescription,
        premium:0
       }
      for (const item of this.product.addOns) {
          this.optionId=riskID.id    
        
       try {
          if (this.resourcesId) {
            this.additionalData = await this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise()
            // this.addonQuo.getOne(item.id, this.resourcesId,this.optionId).toPromise().then((response: any) => {
            //   console.log("response",response);
            console.log("response",this.additionalData);

              if (this.additionalData) {
                obj[item.code] = this.additionalData.premium || 0
                obj.premium+=parseInt(this.additionalData.premium)
              }else{
                obj[item.code]=0
              }
            // })
          }
        } catch (error) {
        }
      }
      console.log("ADDON",obj);
      
      this.addOnData.push(obj)
      console.log("ADDONDATA",this.addOnData);
      
    }
  }
  // }

}
