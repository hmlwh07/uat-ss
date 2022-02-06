import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { OTPService, resetPasswordService, verifyPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup
  isMatch: boolean = false
  submited: boolean = false
  public showPassword: boolean;
  public showoldPassword: boolean;
  public shownewPassword: boolean;
  public showcomfirmPassword: boolean;
  constructor(private modal: NgbModal, private resetPasswordService: resetPasswordService,
    private OTPService: OTPService,private verifyPasswordService:verifyPasswordService) { }

  ngOnInit(): void {
    this.loadForm()
  }
  loadForm() {
    this.resetForm = new FormGroup({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required,Validators.minLength(5), ]),
      // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
      confirmNewPassword: new FormControl(null, [Validators.required,Validators.minLength(5)]),

    },
    )

  }
 
  requestAuth() {
    console.log(this.resetForm.valid)
    if (this.resetForm.valid && this.isMatch) {
      this.verifyPasswordService.save(this.resetForm.value).toPromise()
        .then((res: any) => {
          console.log("requestAuth",res)
          if(res){
            let modalRef;
            modalRef = this.modal.open(OtpModalComponent, { size: 'lg', backdrop: false });
            modalRef.componentInstance.data = this.resetForm.value
            modalRef.result.then(() => { }, (res) => {
              console.log(res)
              if (res) {
                this.resetForm.reset()
              }
            })
          }
          }
          
        )



    }

  }
  cancel() {
    this.resetForm.reset()
  }


  isControlValid(controlName: string): boolean {
    const control = this.resetForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.resetForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.resetForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.resetForm.controls[controlName];
    return control.dirty || control.touched;
  }


  confirmPassword() {
    if (this.resetForm.value['newPassword'] != null && this.resetForm.value['confirmNewPassword'] != null) {
      const password = this.resetForm.value['newPassword'];
      const confirmPassword = this.resetForm.value['confirmNewPassword'];
      var result = password === confirmPassword ? true : false;
      return this.submited ? !result : false;
    }
    if (this.submited) {
      return this.resetForm.controls['confirmNewPassword'].invalid
    }
  }


  iscomfirmPassword(newPass, confirmNewPassword): any {
    const newPassword = this.resetForm.controls[newPass];
    const comfirmPassword = this.resetForm.controls[confirmNewPassword];

    console.log(newPassword.value, comfirmPassword.value)

    if (newPassword.value == comfirmPassword.value) {
      this.isMatch = true
      return comfirmPassword.hasError('Match') && (comfirmPassword.dirty || comfirmPassword.touched);
    } else {
      this.isMatch = false
      return comfirmPassword.hasError('Not Match') && (comfirmPassword.dirty || comfirmPassword.touched);
    }
  }
}
