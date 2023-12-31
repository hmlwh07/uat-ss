import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { GlobalFunctionService } from '../../../../core/global-fun.service';
import { validateAllFields } from '../../../../core/valid-all-feild';
import { PolicyDTO } from '../../../policy/policy.dto';
import { Product } from '../../../products/models/product.dto';
import { ProductDataService } from '../../../products/services/products-data.service';
import { QuotationDTO } from '../../../quotations/quotation.dto';
import { CalculatedBuildingComponent } from '../../calculated-building/calculated-building.component';
import { FirePageID, FireRiskID } from '../../static-pages.data';
import { PremiumRateService } from '../../surrounding-building/models&services/premium-rate-service';
import { SurroundingBuildingService } from '../../surrounding-building/models&services/surrounding-building.service';
import { FireRiskRateService } from '../models&services/fire-risk-rate.service';
import { FireRiskService } from '../models&services/fire-risk.service';

@Component({
  selector: 'app-risk-detail',
  templateUrl: './risk-detail.component.html',
  styleUrls: ['./risk-detail.component.scss']
})
export class RiskDetailComponent implements OnInit, OnDestroy {
  @Input() product: Product
  @Input() editData: QuotationDTO | PolicyDTO
  @Input() isApplication: boolean = true
  @ViewChild(CalculatedBuildingComponent) stockTemp: CalculatedBuildingComponent
  fireRiskform: FormGroup;
  typeOfBuildingOption: any = []
  occupationOfBuildingOption: any[] = []
  occupationOfBuildingOptions: any[] = []
  buildingClassOption: any = []
  roofOption: any = []
  wallOption: any = []
  floorClassOption: any = []
  premiumRateOption: any = []
  type: string = 'create'
  resourcesId: string = ""
  @Input() oldData: any = {}
  premiumAmt: string = ""
  sumInsured: any
  viewPage = "form"
  buildingSi: number = 0
  riskSi: number = 0
  otherSi: number = 0
  fireRate: number = 0
  productDetail: any = {}
  fireContentSi: number = 0
  firePlatSi: number = 0
  fireStockSi: number = 0
  activeBox: string = "DETAIL"
  step1Com: boolean = false
  step2Com: boolean = false
  step3Com: boolean = false
  currencyType: string = "MMK"
  unsub: Subscription[] = []
  totalPremium: any = 0;
  tempTotalPremiumAmount: any = 0;
  countTotal: number;
  constructor(private modalService: NgbModal, public modal: NgbActiveModal,
    private masterDataService: MasterDataService, private cdf: ChangeDetectorRef,
    private fireRiskService: FireRiskService, private auth: AuthService,
    private PremiumRateService: PremiumRateService, private prodService: ProductDataService,
    private globalService: GlobalFunctionService, private fireRiskRate: FireRiskRateService,
    private firebuildingService: SurroundingBuildingService,
    private numberPipe: DecimalPipe) { }

  ngOnDestroy(): void {
    this.unsub.forEach(x => x.unsubscribe())
  }

  ngOnInit(): void {
    console.log("isApplication", this.isApplication);

    if (this.totalPremium == 0) {
      this.totalPremium = 0;
    }
    this.unsub[0] = this.globalService.currenyValueObs.subscribe((res) => {
      if (this.currencyType != res) {
        this.currencyType = res
        console.log("  this.currencyType ", this.currencyType);

      }
    })
    this.loadForm()
    this.getBuildingClass()
    this.getBuildingType()
    this.getBuildingOccupation()
    this.getRoof()
    this.getWall()
    this.getFloor()
    this.productDetail = this.globalService.tempFormData[FirePageID] || {}
    if (this.type == 'create') {
      this.loadForm()
    } else {
      this.loadForm(this.oldData)
      if (this.oldData.id) {
        this.getFirePlant()
        this.getFireStock()
        this.getFireContent()
      }
    }

  }
  getBuildingClass() {
    this.masterDataService
      .getDataByType("BUILDING_CLASS").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.buildingClassOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingType() {
    this.masterDataService
      .getDataByType("TYPE_OF_BUILDING").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.typeOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getRoof() {
    this.masterDataService
      .getDataByType("CONTRUCTION_OF_ROOF").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.roofOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getWall() {
    this.masterDataService
      .getDataByType("CONTRUCTION_OF_WALLS").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.wallOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getFloor() {
    this.masterDataService
      .getDataByType("CONTRUCTION_OF_FLOOR").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.floorClassOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingOccupation() {
    this.masterDataService
      .getDataByType("OCCUPATION_OF_BUILDING").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.occupationOfBuildingOptions = res
          let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding
          let typeOfBuilding = this.fireRiskform.value.typeOfBuilding
          if (occupationOfBuilding && typeOfBuilding) {
            this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding)
            let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding)
            if (index < 0) {
              this.fireRiskform.controls.occupationOfBuilding.setValue(null)
            }
          }
          this.cdf.detectChanges();
        }
      });
  }

  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue, 'parent': x.parentId }
    })
  }

  calcuRate(type?: string) {
    let buildingClass = this.fireRiskform.value.buildingClass
    let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding
    let typeOfBuilding = this.fireRiskform.value.typeOfBuilding
    if (type == 'child') {
      this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding)
      let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding)
      if (index < 0) {
        this.fireRiskform.controls.occupationOfBuilding.setValue(null)
      }
    }
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }

  getPremiumRate() {
    let buildingClass = this.fireRiskform.value.buildingClass
    let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding
    let typeOfBuilding = this.fireRiskform.value.typeOfBuilding
    this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res: any) => {
      if (res) {
        this.fireRiskform.controls.rate.setValue(res.premiumRate)
      }
    })
  }

  loadForm(oldData?) {
    //     Validators.required
    // Validators.required
    // Validators.required
    //     Below fields should be mandatory according to the core system.
    // 1. Building description
    // 2. Type of Building
    // 3. Occupation of Building
    // 4. Building Class
    // 5. Construction of Roof
    // 6. Construction of Wall
    // 7. Construction of Floor
    // 8. No of Story of Building
    // 9. Year of Construction
    // 10. Total square in Feet
    // 11. Special Decoration
    let formValidate = []
    if (this.productDetail.policyType == 'T-NM')
      formValidate.push(Validators.required)
    this.fireRiskform = new FormGroup({
      buildingClass: new FormControl(oldData ? oldData.buildingClass : "", Validators.required),
      buildingDescription: new FormControl(oldData ? oldData.buildingDescription : "", Validators.required),
      // id: new FormControl(oldData ? oldData.id : ""),
      occupationOfBuilding: new FormControl(oldData ? oldData.occupationOfBuilding : "", Validators.required),
      typeOfBuilding: new FormControl(oldData ? oldData.typeOfBuilding : "", Validators.required),
      constructionOfFloor: new FormControl(oldData ? oldData.constructionOfFloor : "", Validators.required),
      constructionOfRoof: new FormControl(oldData ? oldData.constructionOfRoof : "", Validators.required),
      constructionOfWall: new FormControl(oldData ? oldData.constructionOfWall : "", Validators.required),
      height: new FormControl(oldData ? oldData.height : "", Validators.required),
      length: new FormControl(oldData ? oldData.length : "", Validators.required),
      width: new FormControl(oldData ? oldData.width : "", Validators.required),
      rate: new FormControl(oldData ? oldData.rate : ""),
      specialDecoration: new FormControl(oldData ? oldData.specialDecoration || false : false, Validators.required),
      storyOfBuilding: new FormControl(oldData ? oldData.storyOfBuilding : "", Validators.required),
      sumInsure: new FormControl(oldData ? oldData.sumInsure : "", [...formValidate]),
      totalSquareFoot: new FormControl(oldData ? oldData.totalSquareFoot : "", Validators.required),
      yearOfConstruction: new FormControl(oldData ? oldData.yearOfConstruction : "", [Validators.required, Validators.max(9999)]),
      // proposeStockValue: new FormControl(oldData ? oldData.proposeStockValue : 0),
      buildingSi: new FormControl(oldData ? oldData.buildingSi : 0),
      riskSi: new FormControl(oldData ? oldData.riskSi : 0),
    })
    this.riskSi = oldData ? oldData.riskSi : 0
    this.buildingSi = oldData ? oldData.buildingSi : 0
    let occupationOfBuilding = this.fireRiskform.value.occupationOfBuilding
    let typeOfBuilding = this.fireRiskform.value.typeOfBuildings

    if (oldData)
      this.step1Com = oldData.id ? true : false
    if (occupationOfBuilding && typeOfBuilding && this.occupationOfBuildingOptions.length > 0) {
      this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding)
      let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding)
      if (index < 0) {
        this.fireRiskform.controls.occupationOfBuilding.setValue(null)
      }
    }



    if (this.currencyType == 'USD') {
      this.sumInsure.clearValidators();
      this.sumInsure.updateValueAndValidity();
    }
    if (!this.isApplication) {
      this.removeValidator()
    }
  }

  //FOR_QUOTATION
  removeValidator() {
    this.fireRiskform.controls['buildingDescription'].clearValidators()
    this.fireRiskform.controls['buildingDescription'].updateValueAndValidity()
    this.fireRiskform.controls['constructionOfFloor'].clearValidators()
    this.fireRiskform.controls['constructionOfFloor'].updateValueAndValidity()
    this.fireRiskform.controls['constructionOfRoof'].clearValidators()
    this.fireRiskform.controls['constructionOfRoof'].updateValueAndValidity()
    this.fireRiskform.controls['constructionOfWall'].clearValidators()
    this.fireRiskform.controls['constructionOfWall'].updateValueAndValidity()
    this.fireRiskform.controls['height'].clearValidators()
    this.fireRiskform.controls['height'].updateValueAndValidity()
    this.fireRiskform.controls['length'].clearValidators()
    this.fireRiskform.controls['length'].updateValueAndValidity()
    this.fireRiskform.controls['width'].clearValidators()
    this.fireRiskform.controls['width'].updateValueAndValidity()
    this.fireRiskform.controls['rate'].clearValidators()
    this.fireRiskform.controls['rate'].updateValueAndValidity()
    this.fireRiskform.controls['storyOfBuilding'].clearValidators()
    this.fireRiskform.controls['storyOfBuilding'].updateValueAndValidity()
    this.fireRiskform.controls['totalSquareFoot'].clearValidators()
    this.fireRiskform.controls['totalSquareFoot'].updateValueAndValidity()
    this.fireRiskform.controls['yearOfConstruction'].clearValidators()
    this.fireRiskform.controls['yearOfConstruction'].updateValueAndValidity()
    this.fireRiskform.controls['buildingSi'].clearValidators()
    this.fireRiskform.controls['buildingSi'].updateValueAndValidity()
    this.fireRiskform.controls['riskSi'].clearValidators()
    this.fireRiskform.controls['riskSi'].updateValueAndValidity()

  }

  get sumInsure() {
    return this.fireRiskform.get('sumInsure');
  }

  createRisk(closeModal?: boolean, loop?: boolean) {
    console.log("HERE1");
    
    if (this.currencyType == 'USD') {
      this.sumInsure.clearValidators();
      this.sumInsure.updateValueAndValidity();
    }
    if(!this.isApplication){
      this.removeValidator()
    }
    if (this.fireRiskform.invalid) {
      console.log("HERE1");
      validateAllFields(this.fireRiskform)
      return true
    }
    let data = this.fireRiskform.getRawValue();
    console.log("HERE3",data);
    this.step1Com = true
    loop
    if (!closeModal && !loop) {
      this.activeBox = "BUILDING"
    }
    // this.calBuildingSi()

    // let index: number = 0
    //   let unsub = this.globalService.paPremiumResult.subscribe((res: any) => {
    //     this.countTotal = 0;
    //     let position = res.search("MMK");
    //     let currency: string = 'MMK'
    //     if(position < 1){
    //       currency = 'USD'
    //     }

    //     let replaceCurrency = parseFloat(res.replace(currency, '').replace(/,/g, ''));


    //     //this.totalPremium += 
    //     // if(this.prodService.totalPremium !=0){
    //     //   this.totalPremium += 
    //     // }



    //     let total: any 
    //     console.log('oldData =====> ', this.oldData);
    //     if(!postData.id){
    //       let total: any;
    //       total = replaceCurrency + this.totalPremium;
    //       this.totalPremium = total;
    //       console.log('replaceCurrency =====> ', this.totalPremium);
    //     }


    console.log('risk detail totalPremium ', this.totalPremium);
    //   })


    let postData = {
      ...this.oldData,
      ...data,
      id: this.oldData.id,
      buildingSi: this.buildingSi,
      riskSi: this.riskSi,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId || 1,
        policyNumber: null,
        premium: this.totalPremium,
        premiumView: this.numberPipe.transform(this.globalService.calculateDecimal(this.totalPremium) || 0, "1.2-2") + ' MMK',
        sumInsure: data.sumInsure || 0,
        sumInsureView: this.numberPipe.transform(data.sumInsure || 0, "1.2-2") + ' MMK' || null,
        productId: this.prodService.createingProd.id,
        productCode: this.prodService.createingProd.code,
        quotationId: this.prodService.referenceID,
        leadId: this.prodService.creatingLeadId || null,
        currency: this.currencyType,
        resourceId: this.resourcesId,
        type: this.prodService.type,
      },
      resourceId: this.resourcesId
    }
    this.globalService.fireBurgery(data.buildingClass)
    //this.globalService.paPremiumResult.next(this.numberPipe.transform(this.globalService.calculateDecimal(this.totalPremium) || 0, "1.2-2") + ' MMK',)
    //this.globalService.sumInsuredResult.next(this.numberPipe.transform(data.sumInsure || 0, "1.2-2")+ ' MMK');
    // if (this.type != 'create') {
    if (postData.id) {
      this.fireRiskService.updateNoID(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            this.oldData = { ...postData }
            this.viewPage = "other"
            if (this.globalService.tempFormData[FireRiskID]) {
              // this.globalService.tempFormData[FireRiskID].push(this.oldData)
              let index = this.globalService.tempFormData[FireRiskID].findIndex(x => x.id == this.oldData.id)
              if (index < 0) {
                this.globalService.tempFormData[FireRiskID].push(this.oldData)
              } else {
                this.globalService.tempFormData[FireRiskID][index] = this.oldData
              }
            } else {
              this.globalService.tempFormData[FireRiskID] = [this.oldData]
            }
            if (!loop) {
              this.calPremimun(false)
            }
            if (closeModal)
              this.modalService.dismissAll({ data: postData, type: "save" })
          }
        });
    } else {
      this.fireRiskService.save(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            postData.id = res
            this.oldData = { ...postData }
            this.viewPage = "other"
            if (this.globalService.tempFormData[FireRiskID]) {
              this.globalService.tempFormData[FireRiskID].push(this.oldData)
            } else {
              this.globalService.tempFormData[FireRiskID] = [this.oldData]
            }
            if (!loop) {
              this.calPremimun(false)
            }
            if (closeModal)
              this.modal.dismiss({ data: postData, type: "save" })
          }
        });
    }
  }
  viewOther(type: string) {
    if (this.viewPage != type)
      this.viewPage = type
  }

  dismissModal() {
    this.modal.dismiss()
  }

  isControlValid(controlName: string): boolean {
    const control = this.fireRiskform.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.fireRiskform.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.fireRiskform.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.fireRiskform.controls[controlName];
    return control.dirty || control.touched;
  }

  calcuSquare() {
    let width = this.fireRiskform.controls['width'].value
    let height = this.fireRiskform.controls['length'].value
    if (width * height) {
      let square = width * height
      this.fireRiskform.controls['totalSquareFoot'].setValue(square)
    }
  }
  calBuildingSi() {
    console.log("enter SI");

    this.buildingSi = 0
    let pae = this.oldData.sumInsure / this.oldData.totalSquareFoot
    let postData = {
      "classNo": this.oldData.buildingClass,
      "floorCd": this.oldData.constructionOfFloor,
      "roofCd": this.oldData.constructionOfRoof,
      "wallCd": this.oldData.constructionOfWall,
      "year": this.oldData.yearOfConstruction,
    }
    // let pae2: any = await this.fireRiskRate.getMany(postData).toPromise()
    // let value = pae
    // if (pae2) {
    //   let rate = pae2.limitedPae
    //   // testing
    //   value = pae < rate ? rate : pae
    // }

    this.buildingSi = this.oldData.sumInsure
    if (this.otherSi == 0) {
      this.otherSi = this.fireContentSi + this.firePlatSi + this.fireStockSi
    }
    if (this.productDetail.currency == 'MMK')
      this.riskSi = this.otherSi + this.buildingSi
    else
      this.riskSi = this.otherSi
    // this.fireRiskform.controls['sumInsure'].setValue(this.riskSi)
    if (this.oldData) {
      this.oldData.buildingSi = this.buildingSi
      this.oldData.riskSi = this.riskSi
    }

  }
  calBuildingSiD() {
    this.buildingSi = 0
    this.buildingSi = this.oldData.sumInsure
    if (this.otherSi == 0) {
      this.otherSi = this.fireContentSi + this.firePlatSi + this.fireStockSi
    }
    if (this.productDetail.currency == 'MMK')
      this.riskSi = (this.otherSi * 0.75) + this.buildingSi
    else
      this.riskSi = this.otherSi * 0.75
    this.fireRiskform.controls['sumInsure'].setValue(this.riskSi)
    if (this.oldData) {
      this.riskSi = this.oldData.proposeStockValue || 0
      this.oldData.riskSi = this.riskSi
    }
  }

  changeTotal(total) {
    this.otherSi = 0
    this.otherSi = total
  }

  async calPremimun(close: boolean = true) {
    if (this.totalPremium == 0) {
      this.totalPremium = 0;
    }


    console.log("rateData,rate1,rate2,", this.oldData);
    if (this.oldData.id) {
      if (this.productDetail.policyType == 'T-NM') {
        await this.calBuildingSi()
      } else {
        await this.calBuildingSiD()
        // this.riskSi = this.oldData.proposeStockValue|| 0
        // this.oldData.riskSi = this.riskSi
      }
      let rateData = 0
      let rate1 = this.oldData.rate
      let response: any = await this.firebuildingService.getMaxRate(this.oldData.id).toPromise()
      let rate2 = response ? response.rate : 0
      if (this.oldData.specialDecoration) {
        if ((rate1 * 1.3) > rate2) {
          rateData = rate1 * 1.3
        } else {
          rateData = ((rate1 * 1.3) + rate2) / 2
        }
      } else {
        if (rate1 > rate2) {
          rateData = rate1
        } else {
          rateData = (rate1 + rate2) / 2
        }
      }

      let parentData2 = this.globalService.tempFormData[FirePageID];
      let dateRate = 1;
      switch (true) {
        case parentData2.policyUnit == 'G' && parentData2.policyDuration == 1:
          dateRate = 1;
          break;
        case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 10:
          dateRate = 1 / 8;
          break;
        case parentData2.policyUnit == 'D' && parentData2.policyDuration <= 15:
          dateRate = 1 / 6;
          break;
        case parentData2.policyUnit == 'D' && parentData2.policyDuration > 15:
          dateRate = this.calculateDaysToMonth(parentData2.policyDuration);
          console.log('calculateDaysToMonth', dateRate);
          // dateRate = 2 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 1:
          dateRate = 2 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 2:
          dateRate = 3 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 3:
          dateRate = 4 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 4:
          dateRate = 5 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 5:
          dateRate = 6 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration == 6:
          dateRate = 6 / 8;
          break;
        case parentData2.policyUnit == 'F' && parentData2.policyDuration > 6:
          dateRate = 1;
          break;
      }

      //this.oldData.premium = this.globalService.calculateDecimal(this.oldData.riskSi * (rateData / 100))
      this.oldData.premium = this.globalService.calculateDecimal(this.oldData.riskSi * (rateData / 100) * dateRate);

      //this.totalPremium = premiumView
      console.log('Fire cover basic calculate =====> ', this.oldData.premium);
      console.log(' this.prodService.totalPremium =====> ', this.prodService.totalPremium);

      this.totalPremium = this.oldData.premium + this.prodService.totalPremium;


      if (this.currencyType == 'MMK') {
        this.totalPremium = this.totalPremium + 100;
      } else {
        this.totalPremium = this.totalPremium + 0.05;
      }



      //console.log('this.globalService.paPremiumResult =====> ', this.tempTotalPremiumAmount);

      // if(this.prodService.totalPremium != 0){
      //   this.tempTotalPremiumAmount = this.totalPremium
      // }

      // if(this.prodService.totalPremiumView != 0){
      //   this.tempTotalPremiumAmount += this.totalPremium
      // }





      //this.productService.totalPremiumView
      // if(this.totalPremium > 0){
      //   this.tempTotalPremium += this.totalPremium
      //   this.totalPremium = this.tempTotalPremium;
      // }else{
      //   this.tempTotalPremium =  this.totalPremium;
      // }


      await this.createRisk(close, true)
    } else {
      this.modal.dismiss()
    }
  }


  calculateDaysToMonth(days) {
    let rate: any;
    let divided = days / 31;
    if (divided > 0 && divided <= 1) {
      rate = 2 / 8;
    } else if (divided > 1 && divided <= 2) {
      rate = 3 / 8;
    } else if (divided > 2 && divided <= 3) {
      rate = 4 / 8;
    } else if (divided > 3 && divided <= 4) {
      rate = 5 / 8;
    } else if (divided > 3 && divided <= 5) {
      rate = 6 / 8;
    } else if (divided > 5 && divided <= 6) {
      rate = 6 / 8;
    } else {
      rate = 1;
    }
    return rate;
  }

  getFireContent() {
    this.fireRiskService.getContent(this.oldData.id).toPromise().then((res: any) => {
      if (res) {
        this.fireContentSi = 0
        res.forEach(element => {
          this.fireContentSi += parseFloat(element.totalValue)
        });
      }
    })
  }
  getFirePlant() {
    this.fireRiskService.getPlant(this.oldData.id).toPromise().then((res: any) => {
      if (res) {
        this.firePlatSi = 0
        res.forEach(element => {
          this.firePlatSi += parseFloat(element.totalValue)
        });
      }
    })

  }
  getFireStock() {
    this.fireRiskService.getStock(this.oldData.id).toPromise().then((res: any) => {
      if (res) {
        this.fireStockSi = 0
        res.forEach(element => {
          this.fireStockSi += parseFloat(element.stockValue)
        });
      }
    })

  }

  toggleAccordion(type: string) {
    this.activeBox = type == this.activeBox ? "" : type
  }
  step2Done() {
    this.step2Com = true
    this.activeBox = "ADDON"
    let stockVal = this.stockTemp.stockData
    if (stockVal.length > 0)
      this.oldData.proposeStockValue = stockVal[0].agreedSi
    this.calPremimun(false)
  }

  step3Done() {
    this.activeBox = ""
    this.step3Com = true
    this.calPremimun()
  }

}
