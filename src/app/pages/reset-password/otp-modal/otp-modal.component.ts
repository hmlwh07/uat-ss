import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { OTPService, resetPasswordService, VerifyOTPService, verifyPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.scss']
})
export class OtpModalComponent implements OnInit {
  @Input() data: any
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  optCode: any;
  verifyToken: string = ""
  verifyOTPToken: string = ""
  requestStatus: boolean = false
  counter: number = 60
  otpInput: boolean = false;
  isSubmitted: boolean = false
  private interval: any;
  constructor(private OTPService: OTPService, private modal: NgbActiveModal, private resetPasswordService: resetPasswordService, private VerifyOTPService: VerifyOTPService, private verifyPasswordService: verifyPasswordService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.doRequest()
  }
  doRequest() {
    this.otpInput = true;
    this.requestOtp();

    this.requestStatus = !this.requestStatus;
    this.counter = 60;
    if (this.requestStatus == true) {
      this.interval = setInterval(() => {
        this.counter = this.counter - 1;
        if (this.counter === 0) {
          clearInterval(this.interval);
          this.requestStatus = false;
        }
      }, 1000)
    }

  }
  requestOtp() {
    this.OTPService.findAll().toPromise()
      .then((res: any) => {
        if (res.status) {
          // console.log("requestOtp", res)
          this.verifyToken = res.token
        }
      }
      )
  }
  verifyOTP() {
    this.isSubmitted = true
    let otp = this.optCode.join("")
    let token = this.verifyToken
    let postData = { otp, token }
    this.VerifyOTPService.save(postData).toPromise()
      .then((res: any) => {
        // console.log("verifyOTP", res)
        if (res.status == true) {
          this.isSubmitted = false
          this.verifyOTPToken = res.token
          // console.log("verifyOTP", res)
          this.resetPassword()
        } else {
          this.alertService.activate(res.message, 'Warning')
            .then(async (result) => {
              if (result) {
                // this.modal.dismiss()
                this.isSubmitted=false
              }
            }
            )
        }
      }
      )
  }

  
  resetPassword() {
    let postData = {
      passwordRequest: this.data,
      token: this.verifyOTPToken
    }
    this.resetPasswordService.save(postData).toPromise()
      .then((res: any) => {
        // console.log("resetPassword", res)
        if (res.status==true) {
          this.alertService.activate('Password Reset Successful','Success Message').then(async (result)=>{
            if(result){
              this.modal.dismiss(res.status)
            }
          })
         
        }
      }
      )
  }
  cancel() {
    this.modal.dismiss()
  }
  handeOtpChange(event) {
    this.optCode = event
    //  console.log("optCode",  this.optCode)
  }
  handleFillEvent(event) {

  }
}
