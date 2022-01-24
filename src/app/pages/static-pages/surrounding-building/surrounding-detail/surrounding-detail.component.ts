import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth';
import { MasterDataService } from 'src/app/modules/master-data/master-data.service';
import { PremiumRateService } from '../models&services/premium-rate-service';
import { SurroundingBuildingService } from '../models&services/surrounding-building.service';

@Component({
  selector: 'app-surrounding-detail',
  templateUrl: './surrounding-detail.component.html',
  styleUrls: ['./surrounding-detail.component.scss']
})
export class SurroundingDetailComponent implements OnInit {
  surroundingdetailform: FormGroup;
  typeOfBuildingOption: any = []
  occupationOfBuildingOption: any = []
  buildingClassOption: any = []
  premiumRateOption: any = []
  type: string = 'create'
  riskId: string = '1'
  oldData: any
  constructor(private modalService: NgbModal, private masterDataService: MasterDataService, private cdf: ChangeDetectorRef, private SurroundingBuildingService: SurroundingBuildingService, private auth: AuthService, private PremiumRateService: PremiumRateService) { }

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
      .getDataByType("BUILDING_CLASS")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.buildingClassOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.buildingClassOption);
          this.cdf.detectChanges();
        }
      });
  }
  getBuildingType() {
    this.masterDataService
      .getDataByType("BUILDING_TYPE")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.typeOfBuildingOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.typeOfBuildingOption);
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingOccupation() {
    this.masterDataService
      .getDataByType("BUILDING_OCCUPATION")
      .toPromise()
      .then((res: any) => {
        console.log(res);
        if (res) {
          this.occupationOfBuildingOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          console.log(this.occupationOfBuildingOption);
          this.cdf.detectChanges();
        }
      });
  }
  getPremiumRate() {
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
    this.PremiumRateService.getPremiumRate(buildingClass, occupationOfBuilding, typeOfBuilding).toPromise().then((res: any) => {
      if (res) {
        this.surroundingdetailform.controls.premiumRate.setValue(res.premiumRate)
      }
      console.log("RESSS", res)
    })
  }


  loadForm(oldData?) {
    this.surroundingdetailform = new FormGroup({
      buildingClass: new FormControl(oldData ? oldData.buildingClass : ""),
      buildingDescription: new FormControl(oldData ? oldData.buildingDescription : ""),
      distanceToBuilding: new FormControl(oldData ? oldData.distanceToBuilding : "",),
      firePolicyRiskId: new FormControl(this.riskId),
      id: new FormControl(oldData ? oldData.id : ""),
      occupationOfBuilding: new FormControl(oldData ? oldData.occupationOfBuilding : ""),
      premiumRate: new FormControl(oldData ? oldData.premiumRate : ""),
      typeOfBuilding: new FormControl(oldData ? oldData.typeOfBuilding : ""),
    })
  }
  createSurrounding() {

    let data = this.surroundingdetailform.getRawValue();
    let postData = { ...data, createdBy: this.auth.currentUserValue.id }
    if (this.type != 'create') {
      this.SurroundingBuildingService.updateNoID(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            // postData.id = res
            let data = { ...postData }
            this.modalService.dismissAll({ data: data, type: "save" })
          }
        });
    } else {
      this.SurroundingBuildingService.save(postData)
        .toPromise()
        .then((res) => {
          console.log('CREATERES', res)
          if (res) {
            // postData.id = res
            let data = { ...postData }
            this.modalService.dismissAll({ data: data, type: "save" })
          }
        });
    }

  }
  changeClass() {

    if (this.surroundingdetailform.value.buildingClass == 'T-001') {
      this.surroundingdetailform.controls['distanceToBuilding'].setValidators([Validators.max(25)])
      this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity()
    }

    if (this.surroundingdetailform.value.buildingClass != 'T-001') {
      this.surroundingdetailform.controls['distanceToBuilding'].setValidators([Validators.max(50)])
      this.surroundingdetailform.controls['distanceToBuilding'].updateValueAndValidity()
    }
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.buildingClass
    let typeOfBuilding = this.surroundingdetailform.value.buildingClass
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }

  changeType() {
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.buildingClass
    let typeOfBuilding = this.surroundingdetailform.value.buildingClass
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }
  changeOccuption() {
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.buildingClass
    let typeOfBuilding = this.surroundingdetailform.value.buildingClass
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }
  dismissModal() {
    this.modalService.dismissAll()
  }
  isControlValid(controlName: string): boolean {
    const control = this.surroundingdetailform.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.surroundingdetailform.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.surroundingdetailform.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.surroundingdetailform.controls[controlName];
    return control.dirty || control.touched;
  }
}
