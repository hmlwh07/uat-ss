import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { ProductDataService } from '../../../products/services/products-data.service';
import { PremiumRateService } from '../../surrounding-building/models&services/premium-rate-service';
import { SurroundingBuildingService } from '../../surrounding-building/models&services/surrounding-building.service';
import { FireRiskService } from '../models&services/fire-risk.service';

@Component({
  selector: 'app-risk-detail',
  templateUrl: './risk-detail.component.html',
  styleUrls: ['./risk-detail.component.scss']
})
export class RiskDetailComponent implements OnInit {
  fireRiskform: FormGroup;
  typeOfBuildingOption: any = []
  occupationOfBuildingOption: any = []
  buildingClassOption: any = []
  roofOption: any = []
  wallOption: any = []
  floorClassOption: any = []
  premiumRateOption: any = []
  type: string = 'create'
  resourcesId: string = ""
  oldData: any
  premiumAmt: string = ""
  constructor(private modalService: NgbModal, private masterDataService: MasterDataService, private cdf: ChangeDetectorRef, private fireRiskService: FireRiskService, private auth: AuthService, private PremiumRateService: PremiumRateService, private prodService: ProductDataService) { }

  ngOnInit(): void {
    this.loadForm()
    this.getBuildingClass()
    this.getBuildingType()
    this.getBuildingOccupation()
    if (this.type == 'create') {
      this.loadForm()
    } else {
      this.loadForm(this.oldData)
    }

  }
  getBuildingClass() {
    this.masterDataService
      .getDataByType("BUILDING_CLASS").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.buildingClassOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingType() {
    this.masterDataService
      .getDataByType("BUILDING_TYPE").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getRoof() {
    this.masterDataService
      .getDataByType("CONSTRUCTION_ROOF").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getWall() {
    this.masterDataService
      .getDataByType("CONSTRUCTION_WALL").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getFloor() {
    this.masterDataService
      .getDataByType("CONSTRUCTION_FLOOR").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingOccupation() {
    this.masterDataService
      .getDataByType("BUILDING_OCCUPATION").pipe(map(x => this.getFormatOpt(x)))
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.occupationOfBuildingOption = res
          this.cdf.detectChanges();
        }
      });
  }

  getFormatOpt(res) {
    return res.map(x => {
      return { 'code': x.codeId, 'value': x.codeName || x.codeValue }
    })
  }

  calcuRate() {
    let buildingClass = this.fireRiskform.value.buildingClass
    let occupationOfBuilding = this.fireRiskform.value.buildingClass
    let typeOfBuilding = this.fireRiskform.value.buildingClass
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
    this.fireRiskform = new FormGroup({
      buildingClass: new FormControl(oldData ? oldData.buildingClass : "", Validators.required),
      buildingDescription: new FormControl(oldData ? oldData.buildingDescription : ""),
      id: new FormControl(oldData ? oldData.id : ""),
      occupationOfBuilding: new FormControl(oldData ? oldData.occupationOfBuilding : "", Validators.required),
      typeOfBuilding: new FormControl(oldData ? oldData.typeOfBuilding : "", Validators.required),
      constructionOfFloor: new FormControl(oldData ? oldData.constructionOfFloor : "", Validators.required),
      constructionOfRoof: new FormControl(oldData ? oldData.constructionOfRoof : "", Validators.required),
      constructionOfWall: new FormControl(oldData ? oldData.constructionOfWall : "", Validators.required),
      height: new FormControl(oldData ? oldData.height : ""),
      length: new FormControl(oldData ? oldData.length : ""),
      width: new FormControl(oldData ? oldData.rate : ""),
      rate: new FormControl(oldData ? oldData.rate : ""),
      specialDecoration: new FormControl(oldData ? oldData.rate : ""),
      storyOfBuilding: new FormControl(oldData ? oldData.rate : ""),
      sumInsure: new FormControl(oldData ? oldData.rate : ""),
      totalSquareFoot: new FormControl(oldData ? oldData.rate : ""),
      yearOfConstruction: new FormControl(oldData ? oldData.rate : ""),
    })
  }

  createSurrounding() {
    let data = this.fireRiskform.getRawValue();
    let postData = {
      ...data,
      resourceData: {
        agentId: this.auth.currentUserValue.id || 1,
        customerId: this.prodService.creatingCustomer.customerId || 1,
        policyNumber: null,
        premium: (Number(this.premiumAmt.split(" ")[0].split(',').join("")) || 0) + "",
        premiumView: this.premiumAmt,
        productId: this.prodService.createingProd.id,
        quotationId: this.prodService.referenceID,
        resourceId: this.resourcesId,
        type: this.prodService.type,
      },
      resourceId: this.resourcesId
    }

    if (this.type != 'create') {
      this.fireRiskService.updateNoID(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            postData.id = res
            let data = { ...postData, res }
            this.modalService.dismissAll({ data: data, type: "save" })
          }
        });
    } else {
      this.fireRiskService.save(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            postData.id = res
            let data = { ...postData, res }
            this.modalService.dismissAll({ data: data, type: "save" })
          }
        });
    }
  }

  dismissModal() {
    this.modalService.dismissAll()
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
    let height = this.fireRiskform.controls['height'].value
    if (width * height) {
      let square = width * height
      this.fireRiskform.controls['totalSquareFoot'].setValue(square)
    }
  }
}
