import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Input() isApplication: boolean = true
  surroundingdetailform: FormGroup;
  typeOfBuildingOption: any = []
  occupationOfBuildingOption: any[] = []
  occupationOfBuildingOptions: any[] = []
  buildingClassOption: any[] = []
  premiumRateOption: any[] = []
  type: string = 'create'
  riskId: string = '1'
  oldData: any
  constructor(public modal: NgbActiveModal, private masterDataService: MasterDataService, private cdf: ChangeDetectorRef, private SurroundingBuildingService: SurroundingBuildingService, private auth: AuthService, private PremiumRateService: PremiumRateService) { }

  ngOnInit(): void {
    if (this.type == 'create') {
      this.loadForm()
    } else {
      this.loadForm(this.oldData)
    }
    this.getBuildingClass()
    this.getBuildingType()
    this.getBuildingOccupation()


  }
  getBuildingClass() {
    this.masterDataService
      .getDataByType("BUILDING_CLASS")
      .toPromise()
      .then((res: any) => {
        //console.log(res);
        if (res) {
          this.buildingClassOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          //console.log(this.buildingClassOption);
          this.cdf.detectChanges();
        }
      });
  }
  getBuildingType() {
    this.masterDataService
      .getDataByType("TYPE_OF_BUILDING")
      .toPromise()
      .then((res: any) => {
        //console.log(res);
        if (res) {
          this.typeOfBuildingOption = res.map((x) => {
            return { code: x.codeId, value: x.codeName };
          });
          //console.log(this.typeOfBuildingOption);
          this.cdf.detectChanges();
        }
      });
  }

  getBuildingOccupation() {
    this.masterDataService
      .getDataByType("OCCUPATION_OF_BUILDING")
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.occupationOfBuildingOptions = res.map((x) => {
            return { code: x.codeId, value: x.codeName, parent: x.parentId };
          });
          this.changeType('child')
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
    })
  }


  loadForm(oldData?) {

    this.surroundingdetailform = new FormGroup({
      buildingClass: new FormControl(oldData ? oldData.buildingClass : "", Validators.required),
      buildingDescription: new FormControl(oldData ? oldData.buildingDescription : "", Validators.required),
      distanceToBuilding: new FormControl(oldData ? oldData.distanceToBuilding : "", [Validators.max(100), Validators.required]),
      firePolicyRiskId: new FormControl(this.riskId),
      id: new FormControl(oldData ? oldData.id : ""),
      occupationOfBuilding: new FormControl(oldData ? oldData.occupationOfBuilding : "", Validators.required),
      premiumRate: new FormControl(oldData ? oldData.premiumRate : "", Validators.required),
      typeOfBuilding: new FormControl(oldData ? oldData.typeOfBuilding : "", Validators.required),
    })

  }
  removeValidator(){
    if(!this.isApplication){
      this.surroundingdetailform.controls['buildingDescription'].clearValidators()
      this.surroundingdetailform.controls['buildingDescription'].updateValueAndValidity()
    }
  }
  createSurrounding() {
    if(!this.isApplication){
      this.removeValidator()
    }
    if (this.surroundingdetailform.invalid)
      return false
    let data = this.surroundingdetailform.getRawValue();
    let postData = { ...data, createdBy: this.auth.currentUserValue.id }
    if (this.type != 'create') {
      this.SurroundingBuildingService.updateNoID(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            // postData.id = res
            let data = { ...postData }
            let buildingClass = this.surroundingdetailform.value.buildingClass
            let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
            let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
            let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value
            let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value
            let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value
            this.modal.dismiss({ data: { ...data, buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }, type: "save" })
          }
        });
    } else {
      this.SurroundingBuildingService.save(postData)
        .toPromise()
        .then((res) => {
          if (res) {
            postData.id = res
            let data = { ...postData }
            let buildingClass = this.surroundingdetailform.value.buildingClass
            let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
            let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
            let buildingClassValue = this.buildingClassOption.find(x => x.code == buildingClass).value
            let occupationOfBuildingValue = this.occupationOfBuildingOption.find(x => x.code == occupationOfBuilding).value
            let typeOfBuildingValue = this.typeOfBuildingOption.find(x => x.code == typeOfBuilding).value
            this.modal.dismiss({ data: { ...data, buildingClassValue: buildingClassValue, occupationOfBuildingValue: occupationOfBuildingValue, typeOfBuildingValue: typeOfBuildingValue }, type: "save" })
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
    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }

  changeType(type?: string) {
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
    if (type == 'child') {
      this.occupationOfBuildingOption = this.occupationOfBuildingOptions.filter(x => x.parent == typeOfBuilding)
      let index = this.occupationOfBuildingOption.findIndex(x => x.code == occupationOfBuilding)
      if (index < 0) {
        this.surroundingdetailform.controls.occupationOfBuilding.setValue(null)
      }
    }
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }
  changeOccuption() {
    let buildingClass = this.surroundingdetailform.value.buildingClass
    let occupationOfBuilding = this.surroundingdetailform.value.occupationOfBuilding
    let typeOfBuilding = this.surroundingdetailform.value.typeOfBuilding
    if (buildingClass && occupationOfBuilding && typeOfBuilding) {
      this.getPremiumRate()
    }
  }
  dismissModal() {
    this.modal.dismiss()
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
