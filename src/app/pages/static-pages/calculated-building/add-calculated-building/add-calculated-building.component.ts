import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-calculated-building',
  templateUrl: './add-calculated-building.component.html',
  styleUrls: ['./add-calculated-building.component.scss']
})
export class AddCalculatedBuildingComponent implements OnInit {
  @Input() type = "Contents including FFF"
  @Input() pageType="Add"
  @Input() data: any
  @Input() riskId: any = 1
  @Input() isStock: boolean = false
  calculatedbuildingForm: FormGroup
  constructor(private modal: NgbActiveModal,private cdf:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadForm(this.data)
    this.setValidator()
  }
  create() {
    this.modal.dismiss({ data: this.calculatedbuildingForm.value, type: "save" })
  }
  loadForm(oldData?) {
    this.calculatedbuildingForm = new FormGroup({
      firePolicyRiskId: new FormControl(oldData ? oldData.firePolicyRiskId : this.riskId),
      id: new FormControl(oldData ? oldData.id : ""),
      itemDescription: new FormControl(oldData ? oldData.itemDescription || oldData.description : ""),
      itemName: new FormControl(oldData ? oldData.itemName : ""),
      quantity: new FormControl(oldData ? oldData.quantity : ""),
      totalValue: new FormControl(oldData ? oldData.totalValue : ""),
      updatedBy: new FormControl(oldData ? oldData.updatedBy : ""),
      valuePerQuantity: new FormControl(oldData ? oldData.valuePerQuantity : ""),
      month: new FormControl(oldData ? oldData.month : ""),
      remark: new FormControl(oldData ? oldData.remark : ""),
      stockValue: new FormControl(oldData ? oldData.stockValue : ""),
      agreedSi: new FormControl(oldData ? oldData.agreedSi : ""),
    })
  }
  setValidator(){
    if(this.type=="Contents including FFF" || this.type=="Plant and Machinery"){
      this.calculatedbuildingForm.controls['itemDescription'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['itemName'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['itemName'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['quantity'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['quantity'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['valuePerQuantity'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['valuePerQuantity'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['totalValue'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['totalValue'].updateValueAndValidity()
    }
    if(this.type=="Stock"){
      this.calculatedbuildingForm.controls['itemDescription'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['itemDescription'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['stockValue'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['stockValue'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['month'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['month'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['remark'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['remark'].updateValueAndValidity()
      this.calculatedbuildingForm.controls['agreedSi'].setValidators([Validators.required])
      this.calculatedbuildingForm.controls['agreedSi'].updateValueAndValidity()
    }
 
  }

  calculateTotalValue() {
    this.cdf.detectChanges()
    let quantity = this.calculatedbuildingForm.value.quantity
    let value = this.calculatedbuildingForm.value.valuePerQuantity
    console.log("quantity,value",quantity,value)
    if (quantity && value)
      this.calculatedbuildingForm.controls.totalValue.setValue(quantity * value)
  }
  dismissModal() {
    this.modal.dismiss()
  }
  isControlValid(controlName: string): boolean {
    const control = this.calculatedbuildingForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.calculatedbuildingForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.calculatedbuildingForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.calculatedbuildingForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
